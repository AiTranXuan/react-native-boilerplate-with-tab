import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useTheme } from '@/Theme'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import MaskedView from '@react-native-community/masked-view'

const BottomTab = ({ state, descriptors, navigation }) => {
  const { Common, Fonts, Gutters, Layout, Images, Colors } = useTheme()

  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  const checkRenderImage = index => {
    switch (index) {
      case 0:
        return Images.ic_home
      case 1:
        return Images.ic_gift
      case 2:
        return Images.ic_scanner
      case 3:
        return Images.ic_map
      case 4:
        return Images.ic_name
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          console.log('options', options)
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              console.log('route.name', route.name)
              navigation.navigate(route.name)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[Gutters.regularVPadding, styles.btn]}
            >
              <Image
                style={
                  ([Layout.sizeIconRegular],
                  {
                    tintColor: isFocused
                      ? Colors.colorBottonTabSelected
                      : Colors.colorBottonTabNoSelected,
                  })
                }
                resizeMode="contain"
                source={checkRenderImage(index)}
              />
            </TouchableOpacity>
          )
        })}

        {/* <TouchableOpacity
                    accessibilityRole="button"
                    style={{ flex: 1 }}
                >
                    <Text style={{ color: '#222' }}>
                        Add
                </Text>
                </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    backgroundColor: '#231F20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: { flexDirection: 'row', backgroundColor: Colors.transparent },
  container: { backgroundColor: Colors.transparent },
})
