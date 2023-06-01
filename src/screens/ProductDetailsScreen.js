import {
	FlatList,
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import products from "../data/products";

const ProductDetailsScreen = () => {
	const product = products[0];

	const { width } = useWindowDimensions();

	const addToCart = () => {
		console.warn("add to cart");
	};

	return (
		<View>
			<ScrollView>
				{/* Image Carousel */}
				<FlatList
					data={product.images}
					renderItem={({ item }) => (
						<Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
				/>
				<View style={styles.itemDetailContainer}>
					{/* Title */}
					<Text style={styles.itemName}>{product.name}</Text>

					{/* Price */}
					<Text style={styles.itemPrice}>${product.price}</Text>

					{/* Description */}
					<Text style={styles.itemDescription}>{product.description}</Text>
				</View>
			</ScrollView>
			{/* Add to cart button */}
			<Pressable style={styles.addToCartButton} onPress={addToCart}>
				<Text style={styles.addToCartTextButton}>Add to cart</Text>
			</Pressable>
			{/* Navigation icon */}
		</View>
	);
};

const styles = StyleSheet.create({
	itemDetailContainer: {
		flex: 1,
		padding: 20,
	},
	itemName: {
		fontSize: 34,
		fontWeight: "500",
		marginVertical: 10,
	},
	itemPrice: {
		fontWeight: "500",
		fontSize: 20,
		letterSpacing: 1.5,
	},
	itemDescription: {
		marginVertical: 10,
		fontSize: 18,
		lineHeight: 30,
		fontWeight: 300,
	},
	addToCartButton: {
		position: "absolute",
		backgroundColor: "black",
		bottom: 30,
		width: "90%",
		alignSelf: "center",
		padding: 20,
		borderRadius: 100,
		alignItems: "center",
	},
	addToCartTextButton: {
		color: "white",
		fontWeight: "500",
		fontSize: 18,
	},
});

export default ProductDetailsScreen;
