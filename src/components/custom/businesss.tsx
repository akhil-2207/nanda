import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

const  BusinessMarquee = ({
    items,
    direction = 'left',
    speed,
    pauseOnHover = true,
    className,
}: {
    items: {
        image: string;
        title: string;
    }[];
    direction?: 'left' | 'right';
    speed?: 'fast' | 'normal' | 'slow';
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    console.log(items)

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'left') {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'forwards'
                );
            } else {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'reverse'
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty('--animation-duration', '20s');
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty('--animation-duration', '40s');
            } else {
                containerRef.current.style.setProperty('--animation-duration', '80s');
            }
        }
    };
    return (
        <>
            {items && <div
                ref={containerRef}
                className={cn(
                    'scroller max-w-full relative z-20 overflow-hidden',
                    className
                )}
            >
                <ul
                    ref={scrollerRef}
                    className={cn(
                        ' flex min-w-full shrink-0 gap-10 py-4 w-max ',
                        start && 'animate-scroll ',
                        pauseOnHover && 'hover:[animation-play-state:paused]'
                    )}
                >
                    {items.map((item, idx) => (
                        <li
                            className='relative rounded-2xl'
                            style={{
                                background:
                                    'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
                            }}
                            key={idx}
                        >
                            <blockquote className='flex flex-row'>
                                <div className='flex flex-col gap-4 items-center'>
                                <img src={item.image} alt="" className='h-20' />
                                <div className='text-center font-light w-40 flex items-center justify-center text-black'>{item.title}</div>
                                </div>
                            </blockquote>
                        </li>
                    ))}
                </ul>
            </div >}
        </>
    );
};

export default BusinessMarquee