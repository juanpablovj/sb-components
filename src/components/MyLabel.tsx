import "./MyLabel.css";

export interface MyLabelProps {
  /**
   * The name of the label
   */
  label: string;
  /**
   * The size of the label
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Label capitalized
   */
  allCaps?: boolean;
  /**
   * The color of the label
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Font color to use
   */
  fontColor?: string;
  /**
   * Background color to use
   */
  backgroundColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label.toLowerCase()}
    </span>
  );
};
