import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, ScrollView  } from 'react-native';


import CircularProgress from 'react-native-circular-progress-indicator';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const openModal2 = () => {
    setModalVisible2(true);
  };
  const closeModal2 = () => {
    setModalVisible2(false);
  };  
  const openModal3 = () => {
    setModalVisible3(true);
  };
  const closeModal3 = () => {
    setModalVisible3(false);
  };  
  const openModal4 = () => {
    setModalVisible4(true);
  };
  const closeModal4 = () => {
    setModalVisible4(false);
  };  
  const openModal5 = () => {
    setModalVisible5(true);
  };
  const closeModal5 = () => {
    setModalVisible5(false);
  };  

  const InteractiveButton = ({name,status,onPressBehavior}) => {
    
    
    const statusColors = {
        Excellent: '#34C759', // Green
        Good: '#30A0E5', // Light blue
        Fair: '#FFD60A', // Yellow
        Poor: '#FF3B30', // Red
      };
    
      return (
        <TouchableOpacity onPress={onPressBehavior} style={[styles.button, { borderColor: statusColors[status] }]}>
          <View style={[styles.statusIndicator, { backgroundColor: statusColors[status] }]} />
          <Text style={styles.buttonText}>{name}{"\n"}{status}</Text>

        </TouchableOpacity>
      );
  };

  const InteractiveModal = ({name, onCloseBehavior, whichModal,description}) => {
    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={whichModal}
        /* onRequestClose={closeModal} */ 
        onRequestClose={() => { this.visibleModal(false); }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{name}</Text>
            {/* Content of the Modal */}
            <Text>{description}{"\n"}</Text>
            {/* Bar chart and other details go here */}
            <Text>You rank among the top 13% of drivers</Text>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={onCloseBehavior}>
              <Text style={styles.textStyle} >Done</Text>
            </TouchableOpacity>

            {/* Segmented Control for Week, Month, All Time */}

          </View>
        </View>
      </Modal>          
    );
  };

  function DriverScore({score}){
    const [val, setValue] = useState(0);
    return(
        <CircularProgress
          radius={120}
          value={score}
          textColor='#222'
          fontSize={40}
          valueSuffix={''} // '%' 
          inActiveStrokeColor={'orange'}
          activeStrokeColor={'#2ecc71'}
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={5}
          duration={800}
          onAnimationComplete={() => setValue(50)}
          dashedStrokeConfig={{
          count: 100,
          width: 5,
          style: styles.progress,
        }}
        strokeColorConfig={[
          { color: 'red', value: 0 },
          { color: 'orange', value: 60 },
          { color: 'yellow', value: 80 },
          { color: 'green', value: 90 },          
        ]}
     />
     )
    }
const t1 = "Braking that is far harder than typically needed";
const t2 = "Tapping, Texting, or swiping continuously while driving";
const t3 = "Continuously driving far above the speed limit";
const t4 = "Turning a corner too fast";
const t5 = "Rapid accelerating rather than gradually";
const s1 = "You rank among the top 14% of drivers";

  return (
    <ScrollView style={styles.container}>


      <Text> {"\n"} {"\n"} {"\n"} {"\n"}{"\n"}{"\n"}{"\n"}{"\n"} </Text>

      <View style={styles.scoreboard}>
      <Text style={styles.familyAverage}>Welcome James</Text>
        <Text style={styles.familyAverage}>Your Driver Score{"\n"}</Text>
        <DriverScore score="82"/>
      </View>

      <Text>   {"\n"} {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"} </Text>

      <InteractiveButton name = "Harsh Breaking" status = "Excellent" onPressBehavior={openModal}/>
      <InteractiveModal name = "Harsh Braking" onCloseBehavior={closeModal} whichModal={modalVisible} description={t1}/>

      <InteractiveButton name = "Phone Use" status = "Excellent" onPressBehavior={openModal2} />
      <InteractiveModal name = "Phone Use" onCloseBehavior={closeModal2} whichModal={modalVisible2} description={t2}/>

      <InteractiveButton name = "Speeding" status = "Good" onPressBehavior={openModal3} />
      <InteractiveModal name = "Speeding" onCloseBehavior={closeModal3} whichModal={modalVisible3} description={t3}/>

      <InteractiveButton name = "Cornering" status = "Fair" onPressBehavior={openModal4} />
      <InteractiveModal name = "Cornering" onCloseBehavior={closeModal4} whichModal={modalVisible4} description={t4}/>

      <InteractiveButton name = "Rapid Acceleration" status = "Poor" onPressBehavior={openModal5} />
      <InteractiveModal name = "Rapid Acceleration" onCloseBehavior={closeModal5} whichModal={modalVisible5} description={t5}/>



      {/* Existing Home Screen content */}


    </ScrollView>  

  );
};

const styles = StyleSheet.create({
  // ... existing styles
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  harshBrakingButton: {
    // styles for the button that opens the modal
    width: 10,
  },
  closeButton: {
    marginLeft: 225,
    marginTop:10,
    marginBottom: 10,
    //fontWeight: 'bold',
    //fontSize: 80,
    // styles for the close button inside the modal
  },
  modalText: {
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    // other text styles
    
  },
  container: {
    flex: 1,
    //padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 5,
    backgroundColor: 'beige',
  },
  //header: {
    //fontSize: 80,
    //fontWeight: 'bold',
    //marginBottom: 0,
  //},
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 0,
    paddingHorizontal: 0,
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 2,
    marginRight: 0,
    marginLeft: 0,
  },
  statusIndicator: {
    width: 20,
    height: 58,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    
  },
  scoreboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // styles for your scoreboard arc and family average
  },
  //familyAverage: {
    //fontSize: 18,
    //fontWeight: 'bold',
    //textAlign: 'center',
  //s},
  textStyle: {
    fontSize:20,
    color: 'green',
  }
  // ... add other styles for the modal content
});

export default HomeScreen;