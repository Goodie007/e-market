import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

export default function BodyComponent() {
    const navigation = useNavigation();

    const DATA = [
        {
          id: '1',
          name: 'My Account',
          //image: man,
          description: 'make changes to you your account',
          //next: right,
          linkTo: 'StoreProfile',
        },
        {
          id: '2',
          name: 'Copy store URL',
          //image: copy,
          description: 'share your store to more people',
          //next: right,
          linkTo: 'StoreURL',
          isBottomSheet: true,
        },
        {
          id: '3',
          name: 'Account Details',
          //image: house,
          description: 'see your account details',
          //next: right,
          linkTo: 'AccountDetails',
        },
        {
          id: '4',
          name: 'Sales Channels',
          //image: channel,
          description: 'Manage your selling channel',
         // next: right,
          linkTo: 'SalesChannel',
        },
        {
          id: '5',
          name: 'Notification',
         // image: notification,
          description: 'customise vendar to suit you',
          //next: right,
          linkTo: 'Notification',
        },
        {
          id: '6',
          name: 'Referral',
          //image: referral,
          description: 'Refer your friends and earn',
          //next: right,
          linkTo: 'AccountDetails',
        },
        {
          id: '7',
          name: 'Settings',
         // image: setting,
          description: 'Manage your security settings',
          //next: right,
          linkTo: 'AccountDetails',
        },
        {
          id: '8',
          name: 'Support & Help',
         // image: support,
          description: 'Let us know how we can help you',
          //next: right,
          linkTo: 'Support',
          isBottomSheet: false,
          isSupport: true,
        },
        {
          id: '9',
          name: 'Log out',
         // image: logout,
          description: 'Leave this application',
        //  next: right,
          linkTo: 'LogoutSheet',
          isBottomSheet: false,
          isLogout: true,
        },
      ];

      type ItemsProps = {
        image: string;
        description: string;
        next: string;
        name: string;
        linkTo: string;
        isBottomSheet?: boolean;
        isLogout?: boolean;
        isSupport?: boolean;
      };
      
      const ProfileItems = ({
        name,
        image,
        next,
        description,
        linkTo,
        isBottomSheet,
        isLogout,
        isSupport,
      }: ItemsProps) => {
        console.log(linkTo);
        return (
          <TouchableOpacity
            onPress={() => {
              if (isBottomSheet) {
               // refRBSheet.current.open();
              }
              else if (isLogout) {
               // refLogoutSheet.current.open();
              }
              else if (isSupport) {
               // refSupportSheet.current.open()
              }
               else {
                //console.log(linkTo, 'ny');
                navigation.navigate<any>(linkTo);
              }
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 17,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                
                <View
                  style={{
                    paddingLeft: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '600',
                      fontFamily: 'Raleway-Bold',
                    }}>
                    {name}
                  </Text>
                  <Text
                    style={{
                      color: '#7C7C84',
                      fontSize: 12,
                      fontWeight: '400',
                    }}>
                    {description}
                  </Text>
                </View>
              </View>
              <AntDesign name="arrowright" size={24} color={'black'} />
            </View>
          </TouchableOpacity>
        );
      };
    
    return (
        <View>
             <FlatList
          data={DATA}
          renderItem={({item}) => (
            <ProfileItems
                  name={item.name}
                  //image={item.image}
                  description={item.description}
                  //next={item.next}
                  isBottomSheet={item.isBottomSheet}
                  linkTo={item.linkTo}
                  isLogout={item.isLogout}
                  isSupport={item.isSupport} image={''} next={''}            />
          )}
        />
        </View>
    )
}