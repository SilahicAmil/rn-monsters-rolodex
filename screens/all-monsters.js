import { FlatList, Pressable, Text, View } from "react-native";

import { DUMMY_MONSTERS } from "../dummy-data";

const renderMonsters = (itemData) => {
  return <Text>{itemData.item.name}</Text>;
};

const AllMonsters = () => {
  return (
    <View>
      <FlatList
        data={DUMMY_MONSTERS}
        renderItem={renderMonsters}
        key={(item) => item.id}
      />
    </View>
  );
};

export default AllMonsters;
