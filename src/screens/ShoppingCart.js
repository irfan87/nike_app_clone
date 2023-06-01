import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import CartListItem from "../components/CartListItem";

import cart from "../data/cart";

const ShoppingCartTotals = () => (
	<View style={styles.totalContainer}>
		<View style={styles.row}>
			<Text style={styles.text}>Subtotal</Text>
			<Text style={styles.text}>410,00 US$</Text>
		</View>
		<View style={styles.row}>
			<Text style={styles.text}>Delivery</Text>
			<Text style={styles.text}>10,00 US$</Text>
		</View>
		<View style={styles.row}>
			<Text style={styles.textBold}>TOTAL</Text>
			<Text style={styles.textBold}>420,00 US$</Text>
		</View>
	</View>
);

const ShoppingCart = () => {
	return (
		<>
			<FlatList
				data={cart}
				renderItem={({ item }) => <CartListItem cartItem={item} />}
				ListFooterComponent={ShoppingCartTotals}
			/>

			<Pressable style={styles.checkoutButton} onPress={() => {}}>
				<Text style={styles.checkoutTextButton}>Checkout</Text>
			</Pressable>
		</>
	);
};

const styles = StyleSheet.create({
	totalContainer: {
		margin: 20,
		paddingTop: 10,
		borderColor: "gainsboro",
		borderTopWidth: 1,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 2,
	},
	text: {
		fontSize: 16,
		fontWeight: "500",
		color: "gray",
	},
	textBold: {
		fontSize: 16,
		fontWeight: "500",
	},
	checkoutButton: {
		position: "absolute",
		backgroundColor: "black",
		bottom: 30,
		width: "90%",
		alignSelf: "center",
		padding: 20,
		borderRadius: 100,
		alignItems: "center",
	},
	checkoutTextButton: {
		color: "white",
		fontWeight: "500",
		fontSize: 18,
	},
});

export default ShoppingCart;
