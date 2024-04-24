import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

export default function day() {
  const { day } = useLocalSearchParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = require('../../dump_data/day_tasks.json');
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])
  console.log(day);
  console.log(data);

  const renderTasks = () => {
    if (!data || !data[0]) return null; 
    const tasks = data[0][day];
    if (!tasks) return null; 
    return (
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item, index) => index.toString()}
        style={{width:'100%'}}
      />
    );
  };
  const TaskItem = ({ task }) => (
    <View style={styles.taskContainer}>
      <Text>{task.taskName}</Text>
      <Text>{task.state ? "Done" : "Not yet"}</Text>
    </View>
  );

  return (
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {renderTasks()}
      </View>
      
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    backgroundColor: '#7ebbfc',
    borderWidth: 2,
    borderColor: '#0029a3',
    width: '80%',
    margin: 10,
    borderRadius: 5
  },
})