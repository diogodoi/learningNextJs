import React from "react";
import Image from 'next/image'

import  FigmaSvg from '@/assets/imgs/image_15.svg';
import  PythonSvg from '@/assets/imgs/image_13.svg';
import  TSSvg from '@/assets/imgs/image_20.svg';
import  COSvg from '@/assets/imgs/image_17.svg';
import  SASSSvg from '@/assets/imgs/image_22.svg';
import  SLSvg from '@/assets/imgs/image_14.svg';
import  TFSvg from '@/assets/imgs/image_18.svg';
import  ReactSvg from '@/assets/imgs/image_9.svg';

import  FigmaColor from '@/assets/imgs/image_8.svg'
import  PythonColor from '@/assets/imgs/image_3.svg'
import  TSColor from '@/assets/imgs/image_19.svg'
import  COColor from '@/assets/imgs/image_16.svg'
import  SASSColor from '@/assets/imgs/image_21.svg'
import  SLColor from '@/assets/imgs/image_4.svg'
import  TFColor from '@/assets/imgs/image_2.svg'
import  ReactColor from '@/assets/imgs/image_5.svg'
import  HouseSVG from '@/assets/Icons/House.svg';
import  ArrobaSvg from '@/assets/Icons/Arroba.svg';
import  PersonSVG from '@/assets/Icons/Person.svg';
import  LivroSVG from '@/assets/Icons/Livro.svg';

import LinkedinSVG from '@/assets/imgs/linkedin.svg';
import GitbubSVG from '@/assets/imgs/github.svg';
import AssinaturaSVG from '@/assets/imgs/assinatura.svg';


const svgs = {
    Python: PythonSvg,
    Figma: FigmaSvg,
    TS: TSSvg,
    CO: COSvg,
    SASS: SASSSvg,
    SL: SLSvg,
    TF: TFSvg,
    ReactSvg: ReactSvg,

    PythonC: PythonColor,
    FigmaC: FigmaColor,
    TSC: TSColor,
    COC: COColor,
    SASSC: SASSColor,
    SLC: SLColor,
    TFC: TFColor,
    ReactC: ReactColor,

    House:HouseSVG,
    Person:PersonSVG,
    Livro:LivroSVG,
    Arroba:ArrobaSvg,

    Linkedin:LinkedinSVG,
    GitHub:GitbubSVG,
    Assinatura:AssinaturaSVG,
}

export default function Svgs(props) {
    return <Image src= {svgs[props.img]} alt={props.img}/>
}