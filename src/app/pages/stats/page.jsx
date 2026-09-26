'use client'
import { useFriend } from '@/components/context/FriendContext';
import React from 'react';
import { Legend, Pie, PieChart, Sector, Tooltip } from 'recharts';



const StatsPage = ({isAnimationActive = true} ) => {

    const { friends } = useFriend();

        const colors = {
        Call: "#4C1D95",
        Text: "#38BDF8",
        Video: "#166534",
    };

        const chartData = [
        {
            name: "Call",
            value: friends.filter(
                (friend) => friend.contactType === "call"
            ).length,
        },
        {
            name: "Text",
            value: friends.filter(
                (friend) => friend.contactType === "text"
            ).length,
        },
        {
            name: "Video",
            value: friends.filter(
                (friend) => friend.contactType === "video"
            ).length,
        },
    ];


    const renderShape = (props) => {

    const { name, ...rest } = props;

    return (
        <Sector
            {...rest}
            fill={colors[name]}
        />
    );
};

        const renderLegend = () => {
            
    return (
        <div className="flex justify-center gap-6 mt-5">
            {chartData.map((item) => (
                <div
                    key={item.name}
                    className="flex items-center gap-2"
                >
                    <div
                        className="w-4 h-4 rounded-full"
                        style={{
                            backgroundColor: colors[item.name],
                        }}
                    ></div>

                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
};


    return (

       
        <div className="bg-base-200">
            <div className="pt-5 pb-20 w-9/12 mx-auto">

                <h1 className="text-5xl font-bold">
                    Stats
                </h1>

                <div className="mt-10 bg-base-100 rounded-2xl shadow-xl p-8">

                    <h2 className="text-2xl font-bold mb-5">
                        By Interaction Type
                    </h2>

                    
    <PieChart
        style={{
            width: "100%",
            maxWidth: "300px",
            maxHeight: "60vh",
            aspectRatio: 1,
            margin: "0 auto",
        }}
        responsive
    >

        <Pie 
            data={chartData}
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={isAnimationActive}
              shape={renderShape}
        />

        <Tooltip />

        
         <Legend
         wrapperStyle={{   transform: "translateY(20px)" }} content={renderLegend}></Legend>
        

    </PieChart>

                </div>

            </div>
        </div >
    );
};

export default StatsPage;