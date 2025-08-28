import { Image } from 'expo-image';
import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [boxOn, setBoxOn] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const data = [
    { id: '1', title: 'Apple' },
    { id: '2', title: 'Banana' },
    { id: '3', title: 'Orange' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>UI Components</Text>

      {/* Counter */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Counter</Text>
        <Text style={styles.valueText}>Count: {count}</Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => setCount(count + 1)}>
          <Text style={styles.primaryButtonText}>Count btn</Text>
        </TouchableOpacity>
      </View>

      {/* Toggle Box */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Colour Box</Text>
        <TouchableOpacity onPress={() => setBoxOn(!boxOn)}>
          <View
            style={[
              styles.box,
              { backgroundColor: boxOn ? '#ffffffff' : '#f80000ff' },
            ]}
          />
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button Press</Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.primaryButtonText}>Click me</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} transparent animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>YOU HAVE CLICKED THE BUTTON</Text>
              <TouchableOpacity
                style={[styles.primaryButton, { backgroundColor: '#fa0000ff' }]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.primaryButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      {/* Image */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Image</Text>
        <Image
          source={require('@/assets/images/pic.jpg')}
          style={styles.image}
          contentFit="cover"
        />
      </View>

      {/* Fruits List */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fruits List</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                setSelectedId(item.id);
                Alert.alert('Fruit Selected', `You chose ${item.title}`);
              }}>
              <View
                style={[
                  styles.listItem,
                  item.id === selectedId && styles.selectedItem,
                ]}>
                <Text
                  style={[
                    styles.listText,
                    item.id === selectedId && styles.selectedText,
                  ]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212', 
    alignItems: 'center', 
    justifyContent: 'space-around',  // evenly space all sections
    padding: 6,
  },
  heading: { fontSize: 20, color: '#fff', fontWeight: 'bold', textAlign: 'center', marginBottom: 4 },
  section: { alignItems: 'center' },
  sectionTitle: { fontWeight: '600', fontSize: 14, color: '#ffcc00', textAlign: 'center', marginBottom: 4 },
  valueText: { fontSize: 12, color: '#eee', textAlign: 'center', marginBottom: 4 },
  primaryButton: { backgroundColor: '#ffcc00', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 16, alignItems: 'center' },
  primaryButtonText: { color: '#121212', fontWeight: '600', fontSize: 12 },
  box: { width: 60, height: 60, borderRadius: 8, marginTop: 4 },
  image: { width: 100, height: 100, borderRadius: 10, marginTop: 4 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' },
  modalContent: { backgroundColor: '#1e1e1e', padding: 20, borderRadius: 12, width: '80%', alignItems: 'center' },
  modalTitle: { fontSize: 14, fontWeight: '600', marginBottom: 12, color: '#fff', textAlign: 'center' },
  listItem: { padding: 6, margin: 2, backgroundColor: '#2a2a2a', borderRadius: 6, alignItems: 'center' },
  selectedItem: { backgroundColor: '#ffcc00' },
  listText: { fontSize: 12, color: '#fff' },
  selectedText: { color: '#121212', fontWeight: '600' },
});
