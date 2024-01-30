const FriendInvitation = require('../../models/friendInvitation');
const User = require('../../models/user');
const friendsUpdates = require('../../socketHandler/updates/friends');

const postAccept = async (req, res) => {
  try {
    const { id } = req.body;

    const invitation = await FriendInvitation.findById(id);

    if (!invitation) {
      return res.status(401).send('Error occured. please try again');
    }

    // remove that invitation from friend invitations collection
    await FriendInvitation.findByIdAndDelete(id);

    const { senderId, receiverId } = invitation;

    // add friends to both users

    const senderUser = await User.findById(senderId);
    senderUser.friends = [...senderUser.friends, receiverId];

    const receiverUser = await User.findById(receiverId);
    receiverUser.friends = [...receiverUser.friends, senderId];

    await senderUser.save();
    await receiverUser.save();

    // update list of the friends if the users are online
    friendsUpdates.updateFriends(senderId.toString());
    friendsUpdates.updateFriends(receiverId.toString());

    // update pending invitations
    friendsUpdates.updateFriendsPendingInvitations(receiverId.toString());

    return res.status(200).send('Invitation Successfully accepted');
  } catch (err) {
    console.log(err);
    return res.status(500).send('Something went wrong please try again');
  }
};

module.exports = postAccept;
