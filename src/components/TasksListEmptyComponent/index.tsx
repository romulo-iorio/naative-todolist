import { Image, Text, View } from "react-native";

import { styles } from "./styles";

const clipboardImage = require("@/assets/images/Clipboard.png");

export const TasksListEmptyComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={clipboardImage} />

      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          Você ainda não tem tarefas cadastradas
        </Text>

        <Text style={styles.actionText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
};
