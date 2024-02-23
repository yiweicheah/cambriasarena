import { Modal, Text } from "@mantine/core";

const ListModal = ({ list, player, opened, onClose }) => {
  return (
    <Modal opened={opened} onClose={onClose}>
      {list.map((champion, i) => (
        <Text key={i}>{champion.label}</Text>
      ))}
    </Modal>
  );
};

export default ListModal;
