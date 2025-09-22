import React from 'react'

function layout({ children }) {
    return (
        <html lang='eng'>
            <body>
                <div>
                    {children}
                </div>
            </body>
        </html>

    )
}

export default layout
