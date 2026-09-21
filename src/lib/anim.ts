import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

// premium easings used across the site
export const EASE_OUT = 'power4.out';
export const EASE_INOUT = 'power3.inOut';
