import React from 'react'

// function nav() {
//   return (
//     <div>nav</div>
//   )
// }

// export default nav




// React Router
// import { Link } from 'react-router-dom';
// import Link from 'next/link';

// Icons
// import { HiOutlineDocumentReport } from "react-icons/hi";
// import { GiReceiveMoney } from "react-icons/gi";
// import { MdOutlineSavings } from "react-icons/md";
// import { GiExpense } from "react-icons/gi";

const Nav = () => {
    return (
        <nav style={styles.nav}>
            <a style={styles.a}>Reports</a>
            <a style={styles.a}>Income</a>
            <a style={styles.a}>Savings</a>
            <a style={styles.a}>Spending</a>
        </nav>
    )
}

export default Nav

const styles = {
    nav: {
        display: 'flex',
        flexDirection: 'row',
        width: '15rem',
        backgroundColor: '#DCD6F7',
        padding: '1.25rem 0',
        borderRight: '1px solid #A6B1E1',
    },
    h1: {
        color: '#424874',
        listStyleType: 'none',
        padding: '0 1.25rem',
    },
    showIcon: {
        padding: '0px 10px 10px 10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.25rem'
    }, a: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0',
        padding: '2rem 1.25rem',
        textDecoration: 'none',
        borderBottom: '1px solid #A6B1E1',
    }
}
