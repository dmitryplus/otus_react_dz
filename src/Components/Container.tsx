import React, { useEffect, useState } from 'react';
import * as Styles from './styles';
import { Xhprof } from '../Types';
import {
    LoadXhprofFromFolder,
    xhprofComputeFlatInfo,
    xhprofComputeInclusiveTimes,
    xhprofGenerateDotScript
} from '../Services';
import { parse } from 'svg-parser';

interface ContainerProps {
    xhprof: Xhprof;
}


export const Container: React.FC<ContainerProps> = ({
    xhprof
}: ContainerProps) => {

    const [appState, setAppState] = useState({
        fullSvg: '',
        svgParams: null,
        elements: null
    });

    useEffect(() => {

        const body = {
            graph: `
        digraph call_graph {
        N0[shape=box , label="ExecuteModuleEventEx\nInc: 4191.891 ms (99.4%)\nExcl: 1.353 ms (0.0%)\n56 total calls", width=0.2, height=0.2, fontsize=12, style=filled, fillcolor=yellow];
        N1[shape=box , label="Bitrix\\Iblock\\ORM\\Loader::autoLoad\nInc: 128.256 ms (3.0%)\nExcl: 0.267 ms (0.0%)\n38 total calls", width=0.2, height=0.2, fontsize=12];
        N2[shape=box , label="Bitrix\\Main\\ORM\\Fields\\Field::getName\nInc: 241.693 ms (5.7%)\nExcl: 241.693 ms (5.7%)\n145167 total calls", width=0.8, height=0.5, fontsize=22];
        N3[shape=box , label="Bitrix\\Main\\Text\\StringHelper::strtoupper\nInc: 164.801 ms (3.9%)\nExcl: 164.801 ms (3.9%)\n92255 total calls", width=0.5, height=0.4, fontsize=18, style=filled, fillcolor=yellow];
        N4[shape=box , label="Bitrix\\Main\\ORM\\Entity::getConnection\nInc: 52.966 ms (1.3%)\nExcl: 33.589 ms (0.8%)\n3841 total calls", width=0.2, height=0.2, fontsize=12];
        N5[shape=box , label="Bitrix\\Main\\ORM\\Query\\ChainElement::getValue\nInc: 235.694 ms (5.6%)\nExcl: 235.694 ms (5.6%)\n144042 total calls", width=0.7, height=0.5, fontsize=22];
        N6[shape=box , label="Bitrix\\Main\\ORM\\Entity::hasField\nInc: 170.747 ms (4.0%)\nExcl: 119.134 ms (2.8%)\n28283 total calls", width=0.4, height=0.3, fontsize=15, style=filled, fillcolor=yellow];
        N7[shape=box , label="Bitrix\\Main\\ORM\\Entity::getField\nInc: 395.053 ms (9.4%)\nExcl: 183.151 ms (4.3%)\n27231 total calls", width=0.6, height=0.4, fontsize=19, style=filled, fillcolor=yellow];
        N8[shape=box , label="Bitrix\\Main\\ORM\\Query\\Chain::getAllElements\nInc: 96.277 ms (2.3%)\nExcl: 96.277 ms (2.3%)\n57965 total calls", width=0.3, height=0.2, fontsize=13];
        N9[shape=box , label="Bitrix\\Main\\ORM\\Query\\Chain::getAlias\nInc: 129.916 ms (3.1%)\nExcl: 101.786 ms (2.4%)\n56735 total calls", width=0.3, height=0.2, fontsize=14];
        N10[shape=box , label="Bitrix\\Main\\ORM\\Query\\Query::registerChain\nInc: 70.485 ms (1.7%)\nExcl: 9.625 ms (0.2%)\n1070 total calls", width=0.2, height=0.2, fontsize=12];
        N11[shape=box , label="Bitrix\\Main\\ORM\\Query\\Chain::getLastElement\nInc: 101.350 ms (2.4%)\nExcl: 101.350 ms (2.4%)\n61650 total calls", width=0.3, height=0.2, fontsize=14];
        N12[shape=box , label="Bitrix\\Main\\ORM\\Query\\Query::addToSelectChain\nInc: 101.391 ms (2.4%)\nExcl: 13.385 ms (0.3%)\n150 total calls", width=0.2, height=0.2, fontsize=12];
        N13[shape=box , label="Bitrix\\Main\\ORM\\Query\\Query::getInitAlias\nInc: 52.891 ms (1.3%)\nExcl: 20.665 ms (0.5%)\n1686 total calls", width=0.2, height=0.2, fontsize=12];
        N14[shape=box , label="Bitrix\\Main\\ORM\\Query\\ChainElement::getSqlDefinition\nInc: 44.040 ms (1.0%)\nExcl: 18.251 ms (0.4%)\n969 total calls", width=0.2, height=0.2, fontsize=12];
        N15[shape=box , label="Bitrix\\Main\\ORM\\Query\\Chain::getSqlDefinition\nInc: 90.669 ms (2.2%)\nExcl: 19.868 ms (0.5%)\n969 total calls", width=0.2, height=0.2, fontsize=12];
        N16[shape=box , label="Bitrix\\Main\\ORM\\Query\\Query::buildJoinMap\nInc: 158.212 ms (3.8%)\nExcl: 44.859 ms (1.1%)\n17 total calls", width=0.2, height=0.2, fontsize=12];
        N17[shape=box , label="Bitrix\\Main\\ORM\\Query\\Query::buildSelect\nInc: 91.016 ms (2.2%)\nExcl: 2.294 ms (0.1%)\n17 total calls", width=0.2, height=0.2, fontsize=12];
        N18[shape=box , label="Bitrix\\Main\\ORM\\Query\\Query::buildQuery\nInc: 442.490 ms (10.5%)\nExcl: 1.834 ms (0.0%)\n17 total calls", width=0.2, height=0.2, fontsize=12];
        N19[shape=box , label="Bitrix\\Main\\DB\\Connection::query\nInc: 44.698 ms (1.1%)\nExcl: 0.510 ms (0.0%)\n19 total calls", width=0.2, height=0.2, fontsize=12];
        N20[shape=box , label="Bitrix\\Main\\ORM\\Query\\Query::query\nInc: 55.120 ms (1.3%)\nExcl: 0.363 ms (0.0%)\n17 total calls", width=0.2, height=0.2, fontsize=12];
        N21[shape=box , label="Bitrix\\Main\\ORM\\Query\\Query::exec\nInc: 497.908 ms (11.8%)\nExcl: 0.251 ms (0.0%)\n17 total calls", width=0.2, height=0.2, fontsize=12];
        N22[shape=box , label="Bitrix\\Main\\DB\\Result::fetch\nInc: 70.054 ms (1.7%)\nExcl: 21.136 ms (0.5%)\n184 total calls", width=0.2, height=0.2, fontsize=12];
        N23[shape=box , label="Bitrix\\Main\\ORM\\Objectify\\EntityObject::sysSetActual\nInc: 182.267 ms (4.3%)\nExcl: 129.928 ms (3.1%)\n29426 total calls", width=0.4, height=0.3, fontsize=16];
        N24[shape=box , label="Bitrix\\Main\\ORM\\Query\\Result::initializeFetchObject\nInc: 3572.386 ms (84.7%)\nExcl: 0.407 ms (0.0%)\n14 total calls", width=0.2, height=0.2, fontsize=12, style=filled, fillcolor=yellow];
        N25[shape=box , label="Bitrix\\Main\\ORM\\Objectify\\Collection::sysNormalizePrimary\nInc: 87.867 ms (2.1%)\nExcl: 33.046 ms (0.8%)\n2919 total calls", width=0.2, height=0.2, fontsize=12];
        N26[shape=box , label="Bitrix\\Main\\ORM\\Objectify\\Collection::getByPrimary\nInc: 88.003 ms (2.1%)\nExcl: 17.508 ms (0.4%)\n2195 total calls", width=0.2, height=0.2, fontsize=12];
        N27[shape=box , label="Bitrix\\Main\\ORM\\Objectify\\IdentityMap::get\nInc: 88.183 ms (2.1%)\nExcl: 12.031 ms (0.3%)\n1523 total calls", width=0.2, height=0.2, fontsize=12];
        N28[shape=box , label="Bitrix\\Main\\ORM\\Query\\Query::getRuntimeChains\nInc: 131.129 ms (3.1%)\nExcl: 131.129 ms (3.1%)\n80421 total calls", width=0.4, height=0.3, fontsize=16];
        N29[shape=box , label="Bitrix\\Main\\ORM\\Query\\Result::fetchObject\nInc: 3575.738 ms (84.8%)\nExcl: 0.901 ms (0.0%)\n14 total calls", width=0.2, height=0.2, fontsize=12, style=filled, fillcolor=yellow];
        N30[shape=box , label="Bitrix\\Main\\ORM\\Objectify\\EntityObject::fill\nInc: 105.581 ms (2.5%)\nExcl: 1.077 ms (0.0%)\n18 total calls", width=0.2, height=0.2, fontsize=12];
        N31[shape=box , label="Bitrix\\Main\\ORM\\Objectify\\EntityObject::__call\nInc: 59.184 ms (1.4%)\nExcl: 14.999 ms (0.4%)\n795 total calls", width=0.2, height=0.2, fontsize=12];
        N32[shape=box , label="Bitrix\\Main\\ORM\\Query\\Result::composeRemoteObject\nInc: 846.295 ms (20.1%)\nExcl: 202.304 ms (4.8%)\n3236 total calls", width=0.6, height=0.4, fontsize=20, style=filled, fillcolor=yellow];
        N33[shape=box , label="Bitrix\\Main\\ORM\\Query\\Result::fetchObject@1\nInc: 3529.084 ms (83.7%)\nExcl: 1586.477 ms (37.6%)\n167 total calls", width=5.0, height=3.5, fontsize=35, style=filled, fillcolor=red];
        N34[shape=box , label="Bitrix\\Main\\ORM\\Query\\Result::fetchCollection\nInc: 3545.074 ms (84.1%)\nExcl: 1.274 ms (0.0%)\n3 total calls", width=0.2, height=0.2, fontsize=12, style=filled, fillcolor=yellow];
        N35[shape=box , label="Bitrix\\Iblock\\IblockTable::compileEntity\nInc: 127.989 ms (3.0%)\nExcl: 1.221 ms (0.0%)\n1 total calls", width=0.2, height=0.2, fontsize=12];
        N36[shape=box , label="Bitrix\\Main\\ORM\\Query\\Query::fetchObject\nInc: 3958.239 ms (93.9%)\nExcl: 0.049 ms (0.0%)\n3 total calls", width=0.2, height=0.2, fontsize=12, style=filled, fillcolor=yellow];
        N37[shape=box , label="NotaTools\\Logging\\Entity\\ElementLogger::loadActualObject\nInc: 4095.024 ms (97.1%)\nExcl: 0.382 ms (0.0%)\n2 total calls", width=0.2, height=0.2, fontsize=12, style=filled, fillcolor=yellow];
        N38[shape=box , label="NotaTools\\Logging\\Entity\\AbstractElementLogger::resolveObject\nInc: 755.862 ms (17.9%)\nExcl: 0.007 ms (0.0%)\n1 total calls", width=0.2, height=0.2, fontsize=12];
        N39[shape=box , label="NotaTools\\Logging\\Entity\\AbstractLogger::bindAfterEvent\nInc: 755.933 ms (17.9%)\nExcl: 0.030 ms (0.0%)\n1 total calls", width=0.2, height=0.2, fontsize=12];
        N40[shape=box , label="NotaTools\\Logging\\Entity\\AbstractElementLogger::bindAfterEvent\nInc: 763.290 ms (18.1%)\nExcl: 0.012 ms (0.0%)\n1 total calls", width=0.2, height=0.2, fontsize=12];
        N41[shape=box , label="NotaTools\\Logging\\Events\\IblockElementEvents::OnIBlockElementSetPropertyValuesEx\nInc: 767.654 ms (18.2%)\nExcl: 0.031 ms (0.0%)\n1 total calls", width=0.2, height=0.2, fontsize=12];
        N42[shape=box , label="NotaTools\\Logging\\Entity\\AbstractElementLogger::updateObject\nInc: 3366.702 ms (79.9%)\nExcl: 1.611 ms (0.0%)\n1 total calls", width=0.2, height=0.2, fontsize=12, style=filled, fillcolor=yellow];
        N43[shape=box , label="NotaTools\\Logging\\Entity\\AbstractLogger::onAfter\nInc: 3400.224 ms (80.6%)\nExcl: 0.031 ms (0.0%)\n1 total calls", width=0.2, height=0.2, fontsize=12, style=filled, fillcolor=yellow];
        N44[shape=box , label="CAllIBlockElement::SetPropertyValuesEx\nInc: 4178.859 ms (99.1%)\nExcl: 0.404 ms (0.0%)\n1 total calls", width=0.2, height=0.2, fontsize=12, style=filled, fillcolor=yellow];
        N45[shape=octagon , label="Total: 4216.257 ms\nXHProf Run (Namespace=xhprof_migration_)\nExcl: 0.062 ms (0.0%)\n1 total calls", width=0.2, height=0.2, fontsize=12];
        N0 -> N1[arrowsize=1, color=grey, style="setlinewidth(1)", label="4 calls", headlabel="0.0%", taillabel="0.0%" ];
        N18 -> N4[arrowsize=1, color=grey, style="setlinewidth(1)", label="17 calls", headlabel="0.5%", taillabel="0.1%" ];
        N6 -> N3[arrowsize=2, color=grey, style="setlinewidth(10)", label="28283 calls", headlabel="31.3%", taillabel="100.0%" ];
        N7 -> N6[arrowsize=2, color=grey, style="setlinewidth(10)", label="27231 calls", headlabel="96.4%", taillabel="77.7%" ];
        N7 -> N3[arrowsize=1, color=grey, style="setlinewidth(1)", label="27231 calls", headlabel="28.7%", taillabel="22.3%" ];
        N10 -> N9[arrowsize=1, color=grey, style="setlinewidth(1)", label="1070 calls", headlabel="25.0%", taillabel="53.3%" ];
        N12 -> N11[arrowsize=1, color=grey, style="setlinewidth(1)", label="246 calls", headlabel="0.4%", taillabel="0.5%" ];
        N12 -> N5[arrowsize=1, color=grey, style="setlinewidth(1)", label="775 calls", headlabel="0.5%", taillabel="1.4%" ];
        N12 -> N10[arrowsize=1, color=grey, style="setlinewidth(1)", label="812 calls", headlabel="76.5%", taillabel="61.3%" ];
        N18 -> N12[arrowsize=1, color=grey, style="setlinewidth(1)", label="150 calls", headlabel="100.0%", taillabel="23.0%" ];
        N12 -> N6[arrowsize=1, color=grey, style="setlinewidth(1)", label="2 calls", headlabel="0.0%", taillabel="0.0%" ];
        N16 -> N4[arrowsize=1, color=grey, style="setlinewidth(1)", label="17 calls", headlabel="0.5%", taillabel="0.2%" ];
        N16 -> N11[arrowsize=1, color=grey, style="setlinewidth(1)", label="1636 calls", headlabel="2.6%", taillabel="2.3%" ];
        N13 -> N4[arrowsize=1, color=grey, style="setlinewidth(1)", label="1686 calls", headlabel="44.6%", taillabel="73.4%" ];
        N16 -> N13[arrowsize=1, color=grey, style="setlinewidth(1)", label="1616 calls", headlabel="95.8%", taillabel="44.7%" ];
        N16 -> N8[arrowsize=1, color=grey, style="setlinewidth(1)", label="788 calls", headlabel="1.4%", taillabel="1.2%" ];
        N16 -> N5[arrowsize=1, color=grey, style="setlinewidth(1)", label="5011 calls", headlabel="3.4%", taillabel="7.0%" ];
        N16 -> N2[arrowsize=1, color=grey, style="setlinewidth(1)", label="698 calls", headlabel="0.5%", taillabel="1.0%" ];
        N15 -> N11[arrowsize=1, color=grey, style="setlinewidth(1)", label="1790 calls", headlabel="2.8%", taillabel="4.0%" ];
        N14 -> N4[arrowsize=1, color=grey, style="setlinewidth(1)", label="969 calls", headlabel="24.8%", taillabel="51.0%" ];
        N15 -> N14[arrowsize=1, color=grey, style="setlinewidth(1)", label="969 calls", headlabel="100.0%", taillabel="62.2%" ];
        N18 -> N16[arrowsize=1, color=grey, style="setlinewidth(1)", label="17 calls", headlabel="100.0%", taillabel="35.9%" ];
        N15 -> N5[arrowsize=1, color=grey, style="setlinewidth(1)", label="821 calls", headlabel="0.5%", taillabel="1.8%" ];
        N15 -> N4[arrowsize=1, color=grey, style="setlinewidth(1)", label="821 calls", headlabel="20.8%", taillabel="15.5%" ];
        N15 -> N9[arrowsize=1, color=grey, style="setlinewidth(1)", label="821 calls", headlabel="1.0%", taillabel="1.9%" ];
        N17 -> N15[arrowsize=1, color=grey, style="setlinewidth(1)", label="821 calls", headlabel="90.7%", taillabel="92.7%" ];
        N18 -> N17[arrowsize=1, color=grey, style="setlinewidth(1)", label="17 calls", headlabel="100.0%", taillabel="20.7%" ];
        N18 -> N13[arrowsize=1, color=grey, style="setlinewidth(1)", label="17 calls", headlabel="1.1%", taillabel="0.1%" ];
        N21 -> N18[arrowsize=1, color=grey, style="setlinewidth(1)", label="17 calls", headlabel="100.0%", taillabel="88.9%" ];
        N20 -> N4[arrowsize=1, color=grey, style="setlinewidth(1)", label="17 calls", headlabel="0.4%", taillabel="0.4%" ];
        N20 -> N19[arrowsize=1, color=grey, style="setlinewidth(1)", label="17 calls", headlabel="98.2%", taillabel="80.2%" ];
        N21 -> N20[arrowsize=1, color=grey, style="setlinewidth(1)", label="17 calls", headlabel="100.0%", taillabel="11.1%" ];
        N44 -> N0[arrowsize=2, color=grey, style="setlinewidth(10)", label="8 calls", headlabel="99.6%", taillabel="99.9%" ];
        N23 -> N3[arrowsize=1, color=grey, style="setlinewidth(1)", label="29426 calls", headlabel="31.8%", taillabel="100.0%" ];
        N31 -> N6[arrowsize=1, color=grey, style="setlinewidth(1)", label="793 calls", headlabel="2.7%", taillabel="10.3%" ];
        N30 -> N21[arrowsize=1, color=grey, style="setlinewidth(1)", label="10 calls", headlabel="8.2%", taillabel="39.1%" ];
        N29 -> N24[arrowsize=2, color=grey, style="setlinewidth(10)", label="14 calls", headlabel="100.0%", taillabel="99.9%" ];
        N29 -> N22[arrowsize=1, color=grey, style="setlinewidth(1)", label="14 calls", headlabel="0.3%", taillabel="0.0%" ];
        N29 -> N7[arrowsize=1, color=grey, style="setlinewidth(1)", label="11 calls", headlabel="0.0%", taillabel="0.0%" ];
        N25 -> N7[arrowsize=1, color=grey, style="setlinewidth(1)", label="2919 calls", headlabel="11.3%", taillabel="81.2%" ];
        N26 -> N25[arrowsize=1, color=grey, style="setlinewidth(1)", label="2195 calls", headlabel="74.9%", taillabel="93.4%" ];
        N27 -> N26[arrowsize=1, color=grey, style="setlinewidth(1)", label="1523 calls", headlabel="71.1%", taillabel="82.2%" ];
        N29 -> N27[arrowsize=1, color=grey, style="setlinewidth(1)", label="11 calls", headlabel="1.1%", taillabel="0.0%" ];
        N29 -> N8[arrowsize=1, color=grey, style="setlinewidth(1)", label="21 calls", headlabel="0.0%", taillabel="0.0%" ];
        N29 -> N5[arrowsize=1, color=grey, style="setlinewidth(1)", label="21 calls", headlabel="0.0%", taillabel="0.0%" ];
        N29 -> N2[arrowsize=1, color=grey, style="setlinewidth(1)", label="42 calls", headlabel="0.0%", taillabel="0.0%" ];
        N29 -> N28[arrowsize=1, color=grey, style="setlinewidth(1)", label="21 calls", headlabel="0.0%", taillabel="0.0%" ];
        N29 -> N9[arrowsize=1, color=grey, style="setlinewidth(1)", label="21 calls", headlabel="0.0%", taillabel="0.0%" ];
        N29 -> N23[arrowsize=1, color=grey, style="setlinewidth(1)", label="21 calls", headlabel="0.1%", taillabel="0.0%" ];
        N30 -> N29[arrowsize=1, color=grey, style="setlinewidth(1)", label="10 calls", headlabel="1.6%", taillabel="55.6%" ];
        N30 -> N6[arrowsize=1, color=grey, style="setlinewidth(1)", label="38 calls", headlabel="0.1%", taillabel="0.2%" ];
        N30 -> N7[arrowsize=1, color=grey, style="setlinewidth(1)", label="21 calls", headlabel="0.1%", taillabel="0.3%" ];
        N31 -> N30[arrowsize=1, color=grey, style="setlinewidth(1)", label="11 calls", headlabel="10.9%", taillabel="26.0%" ];
        N35 -> N29[arrowsize=1, color=grey, style="setlinewidth(1)", label="1 call", headlabel="0.0%", taillabel="0.5%" ];
        N33 -> N22[arrowsize=1, color=grey, style="setlinewidth(1)", label="167 calls", headlabel="99.6%", taillabel="3.6%" ];
        N33 -> N7[arrowsize=1, color=grey, style="setlinewidth(1)", label="164 calls", headlabel="0.7%", taillabel="0.1%" ];
        N33 -> N27[arrowsize=1, color=grey, style="setlinewidth(1)", label="164 calls", headlabel="10.7%", taillabel="0.5%" ];
        N33 -> N8[arrowsize=1, color=grey, style="setlinewidth(1)", label="55156 calls", headlabel="95.1%", taillabel="4.7%" ];
        N33 -> N5[arrowsize=1, color=grey, style="setlinewidth(1)", label="130908 calls", headlabel="91.1%", taillabel="11.1%" ];
        N33 -> N2[arrowsize=1, color=grey, style="setlinewidth(1)", label="141212 calls", headlabel="97.3%", taillabel="12.1%" ];
        N33 -> N28[arrowsize=1, color=grey, style="setlinewidth(1)", label="80400 calls", headlabel="100.0%", taillabel="6.7%" ];
        N33 -> N9[arrowsize=1, color=grey, style="setlinewidth(1)", label="54724 calls", headlabel="73.8%", taillabel="4.9%" ];
        N33 -> N23[arrowsize=1, color=grey, style="setlinewidth(1)", label="6407 calls", headlabel="22.5%", taillabel="2.1%" ];
        N33 -> N11[arrowsize=1, color=grey, style="setlinewidth(1)", label="50076 calls", headlabel="81.7%", taillabel="4.3%" ];
        N32 -> N27[arrowsize=1, color=grey, style="setlinewidth(1)", label="1348 calls", headlabel="88.1%", taillabel="12.1%" ];
        N32 -> N7[arrowsize=2, color=grey, style="setlinewidth(10)", label="22988 calls", headlabel="84.0%", taillabel="51.5%" ];
        N32 -> N23[arrowsize=1, color=grey, style="setlinewidth(1)", label="22988 calls", headlabel="77.4%", taillabel="21.9%" ];
        N33 -> N32[arrowsize=2, color=grey, style="setlinewidth(10)", label="3236 calls", headlabel="100.0%", taillabel="43.6%" ];
        N34 -> N33[arrowsize=2, color=grey, style="setlinewidth(10)", label="167 calls", headlabel="100.0%", taillabel="99.6%" ];
        N24 -> N34[arrowsize=2, color=grey, style="setlinewidth(10)", label="3 calls", headlabel="100.0%", taillabel="99.2%" ];
        N35 -> N30[arrowsize=1, color=grey, style="setlinewidth(1)", label="1 call", headlabel="70.9%", taillabel="59.1%" ];
        N1 -> N35[arrowsize=1, color=grey, style="setlinewidth(1)", label="1 call", headlabel="100.0%", taillabel="100.0%" ];
        N37 -> N1[arrowsize=1, color=grey, style="setlinewidth(1)", label="1 call", headlabel="99.8%", taillabel="3.1%" ];
        N16 -> N10[arrowsize=1, color=grey, style="setlinewidth(1)", label="48 calls", headlabel="8.0%", taillabel="5.0%" ];
        N36 -> N21[arrowsize=1, color=grey, style="setlinewidth(1)", label="3 calls", headlabel="88.6%", taillabel="11.1%" ];
        N33 -> N26[arrowsize=1, color=grey, style="setlinewidth(1)", label="672 calls", headlabel="28.9%", taillabel="1.3%" ];
        N36 -> N29[arrowsize=2, color=grey, style="setlinewidth(10)", label="3 calls", headlabel="98.4%", taillabel="88.9%" ];
        N37 -> N36[arrowsize=2, color=grey, style="setlinewidth(10)", label="2 calls", headlabel="99.9%", taillabel="96.6%" ];
        N38 -> N37[arrowsize=1, color=grey, style="setlinewidth(1)", label="1 call", headlabel="18.5%", taillabel="100.0%" ];
        N39 -> N38[arrowsize=1, color=grey, style="setlinewidth(1)", label="1 call", headlabel="100.0%", taillabel="100.0%" ];
        N40 -> N39[arrowsize=1, color=grey, style="setlinewidth(1)", label="1 call", headlabel="100.0%", taillabel="99.0%" ];
        N31 -> N3[arrowsize=1, color=grey, style="setlinewidth(1)", label="454 calls", headlabel="0.5%", taillabel="1.8%" ];
        N31 -> N7[arrowsize=1, color=grey, style="setlinewidth(1)", label="535 calls", headlabel="1.8%", taillabel="16.4%" ];
        N41 -> N40[arrowsize=1, color=grey, style="setlinewidth(1)", label="1 call", headlabel="100.0%", taillabel="99.4%" ];
        N0 -> N41[arrowsize=1, color=grey, style="setlinewidth(1)", label="1 call", headlabel="100.0%", taillabel="18.3%" ];
        N42 -> N37[arrowsize=2, color=grey, style="setlinewidth(10)", label="1 call", headlabel="81.5%", taillabel="99.2%" ];
        N42 -> N2[arrowsize=1, color=grey, style="setlinewidth(1)", label="248 calls", headlabel="0.2%", taillabel="0.0%" ];
        N43 -> N42[arrowsize=2, color=grey, style="setlinewidth(10)", label="1 call", headlabel="100.0%", taillabel="99.0%" ];
        N0 -> N43[arrowsize=2, color=grey, style="setlinewidth(10)", label="1 call", headlabel="100.0%", taillabel="81.1%" ];
        N45 -> N44[arrowsize=2, color=grey, style="setlinewidth(10)", label="1 call", headlabel="100.0%", taillabel="99.1%" ];

    }`,
            layout: 'dot',
            format: 'svg'
        };


        const apiUrl = `https://quickchart.io/graphviz`;
        fetch(apiUrl,
            {
                method: 'post',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            }
        )
            .then((res) => res.text())
            .then((repos) => {

                const cleanRepo = repos.substring(repos.indexOf('<svg'), repos.indexOf('svg>') + 4);

                //console.log(cleanRepo);

                const fullParsed = parse(repos);



               // const test = fullParsed?.children[0]?.children[0]?.properties;

               // console.log(test);

                const parsed = fullParsed?.children[0];

                //console.log(parsed);


                const svgParams = {...parsed?.properties, ...fullParsed?.children[0]?.children[0]?.properties};
                const elements = parsed?.children[0]?.children;

                setAppState({ fullSvg: cleanRepo, svgParams: svgParams, elements: elements });

                console.log('svgParams', svgParams);
                //console.log('elements', elements);

            });
    }, []);

    //console.log('from Container', xhprof);

    //const dotScript: string = xhprofGenerateDotScript(xhprof);


    console.log('end');


    const Node = (params) => {

       //console.log(params);

        let title = '';
        let fill = '';
        let stroke = '';
        let points = '';

        const textElements = [];

        params.children.forEach((item, index) => {

            //console.log(item);

            if (item.tagName === 'title') {
                title = item.children[0].value;
            }

            if (item.tagName === 'polygon') {

                fill = item.properties.fill;
                stroke = item.properties.stroke;
                points = item.properties.points;



            }

            if (item.tagName === 'text') {

                textElements.push(
                    <text
                        textAnchor={item.properties["text-anchor"]}
                        x={item.properties.x}
                        y={item.properties.y}
                        fontFamily={item.properties["font-family"]}
                        fontSize={item.properties["font-size"]}
                        fill={item.properties.fill}
                        key={index + params.properties?.id + item.children[0].value}
                    >
                        {item.children[0].value}
                    </text>
                );

            }

        });

        return <g id={params.properties?.id} className={params.properties?.class} key={params.properties?.id}>
            <title>{title}</title>
            <polygon fill={fill} stroke={stroke} points={points} />
            {textElements.map(item => item)}
        </g>;

    }

    const Edge = (params) => {

        //console.log(params);

        return <g id="{params.properties?.id}" className="{params.properties?.class}">
        </g>;

    }


    const Canvas = () => {

        let nodes = [];

        let edges = [];

        if (appState.elements) {


            appState.elements.forEach((item) => {

                if (item.properties.class === 'node') {
                    nodes.push(Node(item));

                }

                // if (item.properties.class === 'edge') {
                //
                //     edges.push(Edge(item));
                //
                // }

            });

        }



        if (appState.svgParams) {


            console.log(appState.svgParams['transform']);


            return <svg
            xmlns="http://www.w3.org/2000/svg"
         //   viewBox={appState.svgParams['viewBox']}
            width={appState.svgParams['width']}
            height={appState.svgParams['height']}
                >
                <g id={appState.svgParams['id']} className={appState.svgParams['class']} transform="scale(1 1) translate(4 2970.0161)">
                    {nodes.map(item => item)}

                </g>
        </svg>

        }


        return <p>empty</p>;

    };


    const CanvasOriginal = () => {
        return <span dangerouslySetInnerHTML={{ __html: appState.fullSvg }}></span>;
    };


    // <svg width="4579pt" height="2974pt"
    //      viewBox="0.00 0.00 4579.14 2974.02" xmlns="http://www.w3.org/2000/svg"
    //      xmlns:xlink="http://www.w3.org/1999/xlink">
    //     <g id="graph0" className="graph" transform="scale(1 1) rotate(0) translate(4 2970.0161)">
    //         <title>call_graph</title>
    //         <polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-2970.0161 4575.1358,-2970.0161 4575.1358,4 -4,4" />
    //         <!-- N0 -->
    //         <g id="node1" className="node">
    //             <title>N0</title>
    //             <polygon fill="#ffff00" stroke="#000000"
    //                      points="1998.6237,-2694.2012 1857.3379,-2694.2012 1857.3379,-2628.9988 1998.6237,-2628.9988 1998.6237,-2694.2012" />
    //             <text text-anchor="middle" x="1927.9808" y="-2679.6" font-family="Times,serif" font-size="12.00"
    //                   fill="#000000">ExecuteModuleEventEx</text>
    //             <text text-anchor="middle" x="1927.9808" y="-2665.2" font-family="Times,serif" font-size="12.00" fill="#000000">Inc: 4191.891 ms (99.4%)</text>
    //             <text text-anchor="middle" x="1927.9808" y="-2650.8" font-family="Times,serif" font-size="12.00" fill="#000000">Excl: 1.353 ms (0.0%)</text>
    //             <text text-anchor="middle" x="1927.9808" y="-2636.4" font-family="Times,serif" font-size="12.00" fill="#000000">56 total calls</text>
    //         </g>
    //     </g>
    // </svg>

    // JSX компонент
    //
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.00 0.00 4579.14 2974.02" width="4579pt" height="2974pt">
    //     <g id="graph0" className="graph" transform="scale(1 1) rotate(0) translate(4 2970.0161)">
    //
    //     <g id="node1" className="node">
    //     <title>N0</title>
    //     <polygon fill="#ffff00" stroke="#000000" points="1998.6237,-2694.2012 1857.3379,-2694.2012 1857.3379,-2628.9988 1998.6237,-2628.9988 1998.6237,-2694.2012" />
    //     <text textAnchor="middle" x="1927.9808" y="-2679.6" fontFamily="Times,serif" fontSize="12.00" fill="#000000">ExecuteModuleEventEx</text>
    //     <text textAnchor="middle" x="1927.9808" y="-2665.2" fontFamily="Times,serif" fontSize="12.00" fill="#000000">Inc: 4191.891 ms (99.4%)</text>
    //     <text textAnchor="middle" x="1927.9808" y="-2650.8" fontFamily="Times,serif" fontSize="12.00" fill="#000000">Excl: 1.353 ms (0.0%)</text>
    //     <text textAnchor="middle" x="1927.9808" y="-2636.4" fontFamily="Times,serif" fontSize="12.00" fill="#000000">56 total calls</text>
    // </g>
    //
    // </g>
    // </svg>


    return (
        <>

        <Styles.Container>
            <Canvas />
        </Styles.Container>
            {/*<CanvasOriginal />*/}
            {/*{Object.keys(xhprof).map((key, index) => (*/}
            {/*    <Styles.Block key={index.toString()}>*/}
            {/*        <p>{key}</p>*/}
            {/*        <p>*/}
            {/*            <span>ct: {xhprof[key].ct}</span>&nbsp;*/}
            {/*            <span>wt: {xhprof[key].wt}</span>&nbsp;*/}
            {/*            <span>cpu: {xhprof[key].cpu}</span>&nbsp;*/}
            {/*            <span>mu: {xhprof[key].mu}</span>&nbsp;*/}
            {/*            <span>pmu: {xhprof[key].pmu}</span>&nbsp;*/}
            {/*        </p>*/}
            {/*    </Styles.Block>*/}
            {/*))}*/}
            </>
    );
};
