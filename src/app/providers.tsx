import { ReactQueryWrapper } from "@/lib/react-query";


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryWrapper>
      {children}
    </ReactQueryWrapper>
  );
}
