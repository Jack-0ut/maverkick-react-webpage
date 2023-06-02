import React from 'react';
import Feature from './Feature';

function Features() {
    const studentFeatures = [
        { icon: "play_circle", title: "Learn through short videos", description: "Hey, we get it. Everyone seems to be having a tough time focusing these days, right? It's like trying to glue your brain to one subject for hours is some sort of mind-zapping chore. So, what's the game plan? We reckon chopping up your study time into smaller bits could be the best way to tackle this." },
        { icon: "quiz", title: "Practice and ask", description: "Here's the deal. There are two big things about learning. First, you've gotta test your smarts and ask about stuff you just don't get. No worries, though - we're here to help! We've got these cool AI tools that'll dive deep into the problem, helping you learn and grow." },
        { icon: "self_improvement", title: "Keep it healthy", description: "Learning isn't just about cramming and marathon study sessions. It's more about staying sharp, focused, and truly grasping the content. That's why we're here with our clever tips and guidance. We want you to not only learn but also enjoy the journey, rather than feeling like you're burning out your brain!"},
    ];

    const teacherFeatures = [
        { icon: "video_camera_front", title: "Create education video content", description: "Got knowledge in a particular field? Great! Turn it into bite-sized video lessons packed with value. We're all about making this process as smooth as a breeze for you, offering hands-on support whenever you need it. Once you've done your bit, sit back and let our algorithms do the heavy lifting." },
        { icon: "upgrade", title: "Improve and interact", description: "You'll interact with students and get valuable feedback highlighting areas for improvement in your courses, and overall student satisfaction. This insight is your secret sauce for creating even better content in the future." },
        { icon: "paid", title: "Earn money from your venture", description: "Most of the student fees go to you, but the total earnings? They're linked to the quality of your content and the number of people you reach with it. Simply put: the better content you produce and the more people you engage, the more you earn."},
    ];

    return (
        <div className="features-container">

            <div className="features-column">
                <h2>Student🎓</h2>
                {studentFeatures.map((feature, index) => (
                    <Feature key={index} className="student-feature" {...feature} />
                ))}
            </div>

            <div className="features-column">
                <h2>Teacher👩🏽‍🏫</h2>
                {teacherFeatures.map((feature, index) => (
                    <Feature key={index} className="teacher-feature" {...feature} />
                ))}
            </div>
            
        </div>
    );
}

export default Features;