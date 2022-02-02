import useFirebaseAuth, {FINISHED} from "../utils/firebase/auth";
import {Divider, Title} from "../utils/components/utils";
import GlobalHeader from "../utils/components/header";
import React from "react";
import Calendar from 'react-calendar'

export default function Home() {
    const auth = useFirebaseAuth();
    if (auth.loading !== FINISHED) return null;
    if (auth.authUser == null) {
        window.location.href = "/login";
        return null;
    }
    const msg = `Home`;
    const hasSchedule = true; // to implement
    const schedule = hasSchedule? <Calendar className={'react-calendar'}/> : <></>
    return (
        <div className={'fullscreen'}>
            <title>Home</title>
            <GlobalHeader authInfo={auth}/>
            <div className={'content'}>
                <Title name={msg}/>
                <Divider/>
                <div className={'box'}>
                    <h3>
                        Welcome to ActuallyAnAgenda!
                    </h3>
                    <div className={'box-content'}>
                        <p>Most of us would like to be more productive with our time but have a long list of tasks we need to complete. Our project; ActuallyAnAgendaAgain aims to solve this by automatically turning a to-do list of your tasks into a fully-fledged schedule using dynamic programming with your events and breaks to optimize your productivity. This is all done in our easy to use web app that provides a GUI for our algorithm. Personal preferences can be set like break durations, work times, and meal times so our algorithm can create a schedule just for you.</p>
                    </div>
                </div>
                {schedule}
            </div>
        </div>
    );
}
