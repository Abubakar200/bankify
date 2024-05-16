import React from "react";

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div>
            Sidebar
            {children}
        </div>
     );
}
 
export default RootLayout;