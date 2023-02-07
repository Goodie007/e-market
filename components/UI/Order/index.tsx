import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Platform,
  SafeAreaView,
  useWindowDimensions,
  Pressable,
} from "react-native";

enum FILTER {
  ALL = "All",
  SUCCESSFUL = "Successful",
  PENDING = "Pending",
  FAILED = "Failed",
}

interface FilterProps {
  isSelected: any;
  label: string;
  value: any;
  onSelect: Function;
  onChange?: any;
}

interface ChangeProp {
  onChange: any;
}

function FilterMenuItem({
  isSelected,
  label,
  value,
  onSelect,
  onChange,
}: FilterProps) {
  const { width } = useWindowDimensions();

  const getItemWidth = () => (width - 40) / 4;

  return (
    <Pressable
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 42,
        backgroundColor: isSelected ? "blue" : "#FFF",
        width: getItemWidth(),
      }}
      onPress={() => {
        onSelect(value);
      }}
    >
      <Text
        style={{
          color: isSelected ? "#303030" : "#858585",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export default function Order({ onChange }: any) {
  const { width } = useWindowDimensions();
  const [selectedFilter, setSelectedFilter] = useState(FILTER.ALL);

  const getPaneWidth = () => width - 40;

  const onSelect = (value: FILTER) => {
    if (value !== selectedFilter) {
      setSelectedFilter(value);
      //onChange(value);
    }
  };

  // useEffect(() => {
  //   onChange(selectedFilter);
  // }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#EDEDED",
        height: "100%",
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: Platform.OS === "android" ? "20%" : "10%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            marginTop: 15,
            marginBottom: 10,
            zIndex: -1,
          }}
        >
          <View
            style={{
              width: getPaneWidth(),
              height: 42,
              borderWidth: 1,
              borderColor: "#E9E9E9",
              borderRadius: 8,
              overflow: "hidden",
              flexDirection: "row",
            }}
          >
            <FilterMenuItem
              label="All"
              value={FILTER.ALL}
              isSelected={selectedFilter === FILTER.ALL}
              onSelect={onSelect}
              //onChange={undefined}
            />

            <FilterMenuItem
              label="Successful"
              value={FILTER.SUCCESSFUL}
              isSelected={selectedFilter === FILTER.SUCCESSFUL}
              onSelect={onSelect}
              //onChange={}
            />

            <FilterMenuItem
              label="Failed"
              value={FILTER.FAILED}
              isSelected={selectedFilter === FILTER.FAILED}
              onSelect={onSelect}
              //onChange={undefined}
            />

            <FilterMenuItem
              label="Pending"
              value={FILTER.PENDING}
              isSelected={selectedFilter === FILTER.PENDING}
              onSelect={onSelect}
              //onChange={undefined}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
