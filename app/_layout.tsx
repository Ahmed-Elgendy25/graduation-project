import React, { useState } from 'react';
import { NativeBaseProvider, theme } from 'native-base';
import { Slot, Stack, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const _layout = () => {
  return (
    <NativeBaseProvider theme={theme}>
      {/* <StatusBar style="light" /> */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#F19A1A' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerTitle: 'Login' }} />

        <Stack.Screen name="signup/index" options={{ headerTitle: 'Signup' }} />
        <Stack.Screen
          name="ForgetPassword/index"
          options={{
            headerTitle: 'Forget Password',
            headerStyle: { backgroundColor: '#F19A1A' },
          }}
        />

        <Stack.Screen
          name="OTP/index"
          options={{
            headerTitle: 'Verify Code',
            headerStyle: { backgroundColor: '#F19A1A' },
          }}
        />
        <Stack.Screen
          name="resetpassword/index"
          options={{
            headerTitle: 'Reset Password',
            headerStyle: { backgroundColor: '#F19A1A' },
          }}
        />

        <Stack.Screen
          name="AssignmentScreen/index"
          options={{
            headerTitle: 'Assignments',
            headerStyle: { backgroundColor: '#F19A1A' },
          }}
        />

        <Stack.Screen
          name="subjectDetails/index"
          options={{
            headerStyle: { backgroundColor: '#F19A1A' },
          }}
        />

        <Stack.Screen
          name="QuizScreen/index"
          options={{
            headerTitle: 'Exams',
            headerStyle: { backgroundColor: '#F19A1A' },
          }}
        />

        <Stack.Screen name="MessageScreen/index" />
        <Stack.Screen
          name="Feedback/index"
          options={{
            headerTitle: 'Feedback',
            headerStyle: { backgroundColor: '#F19A1A' },
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: '#F19A1A' },
          }}
        />
      </Stack>
    </NativeBaseProvider>
  );
};

export default _layout;
