import React, { useRef, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Dimensions,
	Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, { Extrapolate } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const App = () => {
	const height = useRef(new Animated.Value(0)).current;

	const onScroll = Animated.event([
		{
			nativeEvent: { contentOffset: { y: height } },
		},
	]);

	const opacity = height.interpolate({
		inputRange: [0, 180, 242],
		outputRange: [1, 1, 0],
		extrapolateRight: Extrapolate.CLAMP,
	});

	const animatedHeight = height.interpolate({
		inputRange: [0, 190, 262],
		outputRange: [300, 120, 56],
		extrapolateRight: Extrapolate.CLAMP,
	});

	const titleLeftMargin = height.interpolate({
		inputRange: [0, 180, 262],
		outputRange: [16, 16, 56],
		extrapolateRight: Extrapolate.CLAMP,
	});

	const titleFontSize = height.interpolate({
		inputRange: [0, 180, 262],
		outputRange: [26, 26, 20],
		extrapolateRight: Extrapolate.CLAMP,
	});

	const subTitleHeight = height.interpolate({
		inputRange: [0, 180, 262],
		outputRange: [17, 17, 0],
		extrapolateRight: Extrapolate.CLAMP,
	});

	return (
		<SafeAreaView style={styles.container}>
			<Animated.View style={[styles.header, { height: animatedHeight }]}>
				<Animated.Image
					source={{
						uri:
							"https://images.unsplash.com/photo-1612831660163-448ac8b3c13c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
					}}
					style={[styles.backgroundImage, { height: animatedHeight, opacity }]}
				/>
				<TouchableOpacity style={styles.backIcon}>
					<MaterialCommunityIcons name="arrow-left" size={24} color="white" />
				</TouchableOpacity>
				<View style={[styles.headerWrapper]}>
					<Animated.View style={{ flex: 1, left: titleLeftMargin }}>
						<Animated.Text style={[styles.title, { fontSize: titleFontSize }]}>
							The Replacement
						</Animated.Text>
						<Animated.Text style={[styles.subTitle, { height: subTitleHeight, opacity }]}>
							@replacement
						</Animated.Text>
					</Animated.View>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.subTitle}>Follow</Text>
					</TouchableOpacity>
				</View>
			</Animated.View>
			<Animated.ScrollView
				bounces={false}
				onScroll={onScroll}
				scrollEventThrottle={16}
				style={styles.content}
			>
				<View style={styles.image} />
				<View style={styles.image} />
				<View style={styles.image} />
				<View style={styles.image} />
				<View style={styles.image} />
				<View style={styles.image} />
				<View style={styles.image} />
			</Animated.ScrollView>
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
		paddingTop: Platform.OS === "android" ? 25 : 0,
	},
	content: {
		flex: 1,
		backgroundColor: "white",
	},
	header: {
		width: "100%",
		padding: 16,
		backgroundColor: "black",
		alignItems: "center",
		height: 300,
		justifyContent: "flex-end",
	},
	backIcon: {
		position: "absolute",
		top: 16,
		left: 16,
	},
	image: {
		width: "93%",
		height: 200,
		margin: 10,
		backgroundColor: "whitesmoke",
		borderRadius: 16,
	},
	title: {
		fontSize: 26,
		fontWeight: "bold",
		color: "white",
	},
	subTitle: {
		color: "white",
	},
	headerWrapper: {
		justifyContent: "space-between",
		alignItems: "flex-end",
		paddingRight: 16,
		height: 267,
		flexDirection: "row",
		width,
	},
	backgroundImage: {
		width: width,
		resizeMode: "cover",
		backgroundColor: "grey",
		position: "absolute",
		bottom: 0,
		top: 0,
	},
	button: {
		width: 80,
		height: 26,
		borderRadius: 23,
		backgroundColor: "#23f",
		alignItems: "center",
		justifyContent: "center",
	},
});
