import React from 'react'
import Particles from 'react-tsparticles'
import './style.css'
import particles from '../../assets/presets/particles.json'

const Background = () => {

    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    var color = "#75A5B7";
    var maxParticles = 80;

    return (
        <Particles id="tsparticles" options={{
            themes: [
                {
                    name: "light",
                    default: {
                        value: true,
                        mode: "light"
                    },
                    options: {
                        background: {
                            color: "#ffffff"
                        },
                        particles: {
                            color: {
                                value: ["#000000", "#0000ff"]
                            }
                        }
                    }
                },
                {
                    name: "dark",
                    default: {
                        value: true,
                        mode: "dark"
                    },
                    options: {
                        background: {
                            color: "#000000"
                        },
                        particles: {
                            color: {
                                value: ["#ffffff", "#ff0000"]
                            }
                        }
                    }
                },
                {
                    name: "red",
                    options: {
                        background: {
                            color: "#ff0000"
                        },
                        particles: {
                            color: {
                                value: ["#ffffff", "#000000"]
                            }
                        }
                    }
                },
                {
                    name: "green",
                    options: {
                        background: {
                            color: "#00ff00"
                        },
                        particles: {
                            color: {
                                value: ["#000000", "#0000ff"]
                            }
                        }
                    }
                },
                {
                    name: "blue",
                    options: {
                        background: {
                            color: "#0000ff"
                        },
                        particles: {
                            color: {
                                value: ["#ffffff", "#00ff00"]
                            }
                        }
                    }
                },
                {
                    name: "yellow",
                    options: {
                        background: {
                            color: "#ffff00"
                        },
                        particles: {
                            color: {
                                value: ["#000000", "#ff0000"]
                            }
                        }
                    }
                },
                {
                    name: "cyan",
                    options: {
                        background: {
                            color: "#00ffff"
                        },
                        particles: {
                            color: {
                                value: ["#000000", "#ff00ff"]
                            }
                        }
                    }
                },
                {
                    name: "grey",
                    options: {
                        background: {
                            color: "#777777"
                        },
                        particles: {
                            color: {
                                value: ["#ffffff", "#000000"]
                            }
                        }
                    }
                }
            ],
            fpsLimit: 60,
            particles: {
                number: {
                    value: 10,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                shape: {
                    type: ["circle", "square"]
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 25,
                    random: {
                        enable: true,
                        minimumValue: 15
                    }
                },
                rotate: {
                    value: 0,
                    direction: "random",
                    animation: {
                        speed: 25,
                        enable: true
                    }
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    out_mode: "out"
                }
            },
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            detectRetina: true
        }} init={particlesInit} loaded={particlesLoaded} />
    )
}

export default Background
