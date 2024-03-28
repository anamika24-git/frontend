import React from 'react';
import { FlatList, View, Text, StyleSheet,Switch } from 'react-native';
import Card from '../components/Card';
// Sample data
const data = [
  { id: 1, name: 'John', tluka: 'A' ,specialization:'xyz'},
  { id: 2, name: 'Jane', tluka: 'B' ,specialization:'xyz'},
  { id: 3, name: 'Bob', tluka: 'C' ,specialization:'xyz'},
  { id: 4, name: 'John', tluka: 'A' ,specialization:'xyz'},
  { id: 5, name: 'Jane', tluka: 'B' ,specialization:'xyz'},
  { id: 6, name: 'Bob', tluka: 'C' ,specialization:'xyz'},
  { id: 7, name: 'John', tluka: 'A' ,specialization:'xyz'},
  { id: 8, name: 'Jane', tluka: 'B' ,specialization:'xyz'},
  { id: 9, name: 'Bob', tluka: 'C' ,specialization:'xyz'},
  { id: 10, name: 'John', tluka: 'A' ,specialization:'xyz'},
  { id: 11, name: 'Jane', tluka: 'B' ,specialization:'xyz'},
  { id: 12, name: 'Bob', tluka: 'C' ,specialization:'xyz'},
  { id: 13, name: 'John', tluka: 'A' ,specialization:'xyz'},
  { id: 14, name: 'Jane', tluka: 'B' ,specialization:'xyz'},
  { id: 15, name: 'Bob', tluka: 'C' ,specialization:'xyz'},
  // Add more data as needed
];

const TableHeader = () => (
  <View style={styles.tableRow}>
    <Text style={[styles.tableCell, { flex: 1 },{fontWeight: 'bold'}]}>ID</Text>
    <Text style={[styles.tableCell, { flex: 2 },{fontWeight: 'bold'}]}>Name</Text>
    <Text style={[styles.tableCell, { flex: 1 },{fontWeight: 'bold'}]}>Taluka</Text>
    <Text style={[styles.tableCell, { flex: 2 },{fontWeight: 'bold'}]}>Specialization</Text>
  </View>
);

const TableRow = ({ item }) => (
  <View style={styles.tableRow}>
    <Text style={[styles.tableCell, { flex: 1 }]}>{item.id}</Text>
    <Text style={[styles.tableCell, { flex: 2 }]}>{item.name}</Text>
    <Text style={[styles.tableCell, { flex: 1 }]}>{item.tluka}</Text>
    <Text style={[styles.tableCell, { flex: 2 }]}>{item.specialization}</Text>
  </View>
);

const FieldWorkerScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.list}>
    <FlatList 
      data={data}
      ListHeaderComponent={<TableHeader />}
      renderItem={({ item }) => <TableRow item={item} />}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator = {false}
    />
    </View>
    <View style={styles.card}>   
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        flex : 1,
        justifyContent: 'safe'
    },
  tableRow: {
    flexDirection: 'row',
    borderColor: 'white',
    backgroundColor:'white',
    paddingVertical: 10,
    marginEnd: 10
  },
  tableCell: {
    textAlign: 'center',
    fontSize: 18,
  },
  list : {
    flex : 0.5,
    backgroundColor: 'white',
  },
  card : {
    paddingTop : 50,
    flex : 0.5,
    backgroundColor: 'white',
    
  }
});

export default FieldWorkerScreen;
