import { Box, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const GlowingButton = ({
	children,
	href,
	onClick,
	variant = "primary", // primary, secondary, outline
}) => {
	const variants = {
		primary: {
			bg: "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
			color: "white",
			boxShadow: "rgba(80, 63, 205, 0.5) 0px 1px 40px",
		},
		secondary: {
			bg: "linear-gradient(92.88deg, rgb(42, 108, 176) 9.16%, rgb(66, 153, 225) 43.89%, rgb(99, 179, 237) 64.72%)",
			color: "white",
			boxShadow: "rgba(66, 153, 225, 0.5) 0px 1px 40px",
		},
		outline: {
			bg: "transparent",
			color: "white",
			border: "1px solid rgba(255, 255, 255, 0.2)",
		},
	};

	const ButtonWrapper = href ? Link : Box;
	const buttonProps = href ? { href, target: "_blank" } : { onClick };

	return (
		<ButtonWrapper {...buttonProps} _hover={{ textDecoration: "none" }}>
			<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
				<Box
					as="button"
					px={6}
					py={3}
					borderRadius="xl"
					fontSize="lg"
					fontWeight="semibold"
					display="flex"
					alignItems="center"
					gap={3}
					transition="all 0.3s ease"
					position="relative"
					style={variants[variant]}
					_before={{
						content: '""',
						position: "absolute",
						inset: "-1px",
						borderRadius: "inherit",
						padding: "1px",
						background:
							variant === "outline"
								? "linear-gradient(92.88deg, rgba(255, 255, 255, 0.2) 9.16%, rgba(255, 255, 255, 0.4) 43.89%, rgba(255, 255, 255, 0.2) 64.72%)"
								: "none",
						WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
						WebkitMaskComposite: "xor",
						maskComposite: "exclude",
					}}
					_hover={{
						transform: "translateY(-1px)",
						boxShadow:
							variant !== "outline"
								? `${variants[variant].boxShadow}, rgba(0, 0, 0, 0.1) 0px 4px 12px`
								: "none",
						bg: variant === "outline" ? "rgba(255, 255, 255, 0.1)" : variants[variant].bg,
					}}
					_active={{
						transform: "translateY(1px)",
					}}
				>
					{children}
				</Box>
			</motion.div>
		</ButtonWrapper>
	);
};
