import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 24,
          fontWeight: "bolder",
          color: "blue",
          backgroundColor: "orange",
          width: size.width,
          height: size.height,
          padding: 4,
          borderRadius: "40%",
        }}
      >
        Q
      </div>
    ),
    { ...size }
  );
}
