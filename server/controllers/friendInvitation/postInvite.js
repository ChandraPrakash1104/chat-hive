const FriendInvitation = require('../../models/friendInvitation');
const User = require('../../models/user');
const friendsUpdates = require('../../socketHandler/updates/friends');

const postInvite = async (req, res) => {
  const { targetMailAddress } = req.body;

  const { userId, mail } = req.user;

  //check if invited user exists
  if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
    return res
      .status(409)
      .send('Sorry. You cannot become friend with yourself');
  }

  const targetUser = await User.findOne({
    mail: targetMailAddress.toLowerCase(),
  });

  if (!targetUser) {
    return res
      .status(404)
      .send(
        `Friend of ${targetMailAddress} has not been found. Please check mail address`
      );
  }

  //check if invitation is already sent
  const invitationIsAlreadyExists = await FriendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });

  if (invitationIsAlreadyExists) {
    return res.status(409).send('Invitation has been already sent');
  }

  // check if the user we would like to invite is already our friend
  const usersAlreadyFriends = targetUser.friends.find(
    (friendsId) => friendsId.toString() === userId.toString()
  );

  if (usersAlreadyFriends) {
    return res
      .status(409)
      .send('Friend already added. Please check friends List');
  }

  // create new invitation and store in database
  const newInvitation = await FriendInvitation.create({
    senderId: userId,
    receiverId: targetUser._id,
  });

  // update friends invitations if inivitation is successfully created and other user is online

  // send pending invitations update to specific user
  friendsUpdates.updateFriendsPendingInvitations(targetUser._id.toString());

  return res.status(201).send('Invitation has been sent');
};

module.exports = postInvite;
