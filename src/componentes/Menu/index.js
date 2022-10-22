import React from 'react'
import { Link } from 'react-router-dom'
import MenuLink from '../MenuLink';
import styles from './Menu.module.css'

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}
