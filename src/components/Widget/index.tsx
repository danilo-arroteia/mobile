import React, { useRef } from 'react';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC, TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { Options } from '../Options';
import { Form } from '../Form';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Keyboard} from 'react-native'


export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  function handleOpen(){
    bottomSheetRef.current?.expand();
  }

  return (
    <>  
      
        <TouchableOpacity 
          style={styles.button}
          onPress={handleOpen}
        >
            <ChatTeardropDots 
                size={24}
                color={theme.colors.text_on_brand_color}
                weight="bold"
            />
        </TouchableOpacity>
       
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={[1, 260]}
          backgroundStyle={styles.modal}
          handleIndicatorStyle={styles.indicator}
        >
          <Form
            feedbackType='IDEA'
          />
        </BottomSheet>
        
        
    </>
  );
}

export default gestureHandlerRootHOC(Widget);