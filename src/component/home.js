import React, { useEffect, useState } from "react";
// import maquina from "../../img/tragaperras-removebg-preview.png";
import maquinaSinPalo from "../img/maquina_sin_palo.png";
import limonImg from "../img/limon.png";
import palo from "../img/palo.png";
import sieteImg from "../img/siete.png";
import sandiaImg from "../img/sandia.png";
import cerezaImg from "../img/cereza.png";
import { Container } from 'react-bootstrap';

// import murcielago from "../../img/murcielago1.gif";
import '../styles/index.scss'

export function Home() {
	const [palanca, setPalanca] = useState("palo");
	const [fila1Primero, setFila1Primero] = useState(limonImg);
	const [fila1Medio, setFila1Medio] = useState(cerezaImg);
	const [fila1Final, setFila1Final] = useState(sandiaImg);

	const [fila2Primero, setFila2Primero] = useState(sieteImg);
	const [fila2Medio, setFila2Medio] = useState(sandiaImg);
	const [fila2Final, setFila2Final] = useState(sieteImg);

	const [fila3Primero, setFila3Primero] = useState(sandiaImg);
	const [fila3Medio, setFila3Medio] = useState(limonImg);
	const [fila3Final, setFila3Final] = useState(cerezaImg);
	const [premio, setPremio] = useState(false);
	const [flash, setFlash] = useState("");

	const tirada = () => {
		setPalanca("palo_animation");
		setTimeout(() => setPalanca("palo"), 2000);
	};

	const movimiento = () => {
		setPremio(false);
		setFlash("");
		const arrayPalos = [limonImg, sieteImg, sandiaImg, cerezaImg];
		for (let i = 100; i < 1500; i += 100) {
			setTimeout(() => {
				setFila1Primero(
					arrayPalos[Math.round(Math.random() * (3 - 0) + 0)]
				);
				setFila1Medio(
					arrayPalos[Math.round(Math.random() * (3 - 0) + 0)]
				);
				setFila1Final(
					arrayPalos[Math.round(Math.random() * (3 - 0) + 0)]
				);
				setFila2Primero(
					arrayPalos[Math.round(Math.random() * (3 - 0) + 0)]
				);
				setFila2Primero(
					arrayPalos[Math.round(Math.random() * (3 - 0) + 0)]
				);
				setFila2Medio(
					arrayPalos[Math.round(Math.random() * (3 - 0) + 0)]
				);
				setFila2Final(
					arrayPalos[Math.round(Math.random() * (3 - 0) + 0)]
				);
				setFila3Primero(
					arrayPalos[Math.round(Math.random() * (3 - 0) + 0)]
				);
				setFila3Medio(
					arrayPalos[Math.round(Math.random() * (3 - 0) + 0)]
				);
				setFila3Final(
					arrayPalos[Math.round(Math.random() * (3 - 0) + 0)]
				);
			}, i);
		}
		setTimeout(() => {
			setPremio(true);
		}, 2000);
	};

	useEffect(() => {
		if (premio == true) {
			if (fila1Primero == fila1Medio && fila1Primero == fila1Final) {
				setFlash("flash");
			}
			if (fila2Primero == fila2Medio && fila2Primero == fila2Final) {
				setFlash("flash");
			}
			if (fila3Primero == fila3Medio && fila3Primero == fila3Final) {
				setFlash("flash");
			}
		}
	}, [premio]);

	return (
		<Container>
			<div className="container-maquina">
				<img className="maquina" src={maquinaSinPalo}></img>
				<a
					onClick={() => {
						tirada();
						movimiento();
					}}>
					<img className={palanca} src={palo}></img>
				</a>
				<div className="container-palos">
					<div className="container-palo-arriba">
						<img className="palo-centro" src={fila1Primero}></img>
						<img className="palo-centro" src={fila1Medio}></img>
						<img className="palo-centro" src={fila1Final}></img>
					</div>
					<div className="container-palo-centro">
						<img className="palo-centro" src={fila2Primero}></img>
						<img className="palo-centro" src={fila2Medio}></img>
						<img className="palo-centro" src={fila2Final}></img>
					</div>
					<div className="container-palo-abajo">
						<img className="palo-centro" src={fila3Primero}></img>
						<img className="palo-centro" src={fila3Medio}></img>
						<img className="palo-centro" src={fila3Final}></img>
					</div>
				</div>
				<div className={flash}></div>
			</div>
		</Container>
	);
}
