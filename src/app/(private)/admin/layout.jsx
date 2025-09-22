import React from 'react'
import "../../globals.css"
import AdminDashboard from "../admin/page"
function layout({analytics}) {
    return (
        <html lang='en'>
            <body>
                <main>
                   <AdminDashboard analytics={analytics}/>
                </main>
            </body>
        </html>

    )
}

export default layout
