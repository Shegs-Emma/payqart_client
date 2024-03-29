import React from "react";
import { FiPieChart } from "react-icons/fi";
import { 
    DashboardContainer,
    EmptyItm,
    Square,
    Bars,
    LoanCont,
    New,
    TinyBars,
    Tinnies,
} from "./dashnav.styles";
import {
    AnyRow
} from "../shared";
import { P, Span } from "../typography";


const Dashboard = () => {
    return (
        <DashboardContainer>
            {/* The Logo div */}
            <AnyRow>
                <img src="/EasyFinance.svg" alt="logo" className="logo" />
            </AnyRow>

            {/* The Empty items */}
            <EmptyItm>
                <AnyRow emp>
                    <Square />
                    <Bars />
                </AnyRow>
                <AnyRow emp>
                    <Square />
                    <Bars empT />
                </AnyRow>
                <AnyRow emp>
                    <Square />
                    <Bars empTL />
                </AnyRow>
                <AnyRow emp>
                    <Square />
                    <Bars empTLN />
                </AnyRow>
            </EmptyItm>

            {/* The Loan Div */}
            <LoanCont>
                <AnyRow loan>
                    <FiPieChart className="pie" />
                    <P>Loans</P>
                    <New>
                        <Span>New</Span>
                    </New>
                </AnyRow>
            </LoanCont>

            {/* second set of empties */}
            <EmptyItm>
                <Tinnies>
                    <TinyBars />
                    <TinyBars smaller />
                </Tinnies>
                <AnyRow emp>
                    <Square />
                    <Bars tinny />
                </AnyRow>
                <AnyRow emp>
                    <Square />
                    <Bars tinny />
                </AnyRow>
            </EmptyItm>

            {/* third set of empties */}
            <EmptyItm>
                <Tinnies>
                    <TinyBars />
                    <TinyBars smaller />
                </Tinnies>
                <AnyRow emp>
                    <Square />
                    <Bars tin />
                </AnyRow>
                <AnyRow emp>
                    <Square />
                    <Bars tini />
                </AnyRow>
            </EmptyItm>

            {/* fourth set of empties */}
            <EmptyItm>
                <Tinnies>
                    <TinyBars />
                    <TinyBars smaller />
                </Tinnies>
                <AnyRow emp>
                    <Square />
                    <Bars tinin />
                </AnyRow>
                <AnyRow emp>
                    <Square />
                    <Bars tin0 />
                </AnyRow>
                <AnyRow emp>
                    <Square />
                    <Bars tinin0 />
                </AnyRow>
            </EmptyItm>

        </DashboardContainer>
    );
}

export default Dashboard;