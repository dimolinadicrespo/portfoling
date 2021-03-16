export const pageTransition = {
    hidden: {
        opacity: 0,
        x: 300,
    },
    show: {
        opacity: 1,
        x: 0, 
        transition : {
            duration: 0.6,
            when: 'beforeChildren',
            staggerChildren: 0.75,    
        }           
    },
    exit:{
        x: -600,
        opacity: 0,
        transition : {
            duration: 0.6,          
        }           
    }
}
