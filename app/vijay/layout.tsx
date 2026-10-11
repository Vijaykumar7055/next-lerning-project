
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
   <>
      <h2>inner Nav-items</h2>
        {children}
   </>
      
       
  );
}
