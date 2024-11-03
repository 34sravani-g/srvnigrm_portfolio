type sectionID = "about" | "skills" | "experience" | "projects" | "contact"

export const scrollToSection = (section: sectionID) => {
    const selectedItem = document?.getElementById(section)
    if(selectedItem) {
        const yOffset = -60 //scroll above to the top by 60 pixels
        window.scrollTo({
            top: selectedItem.offsetTop + yOffset,
            behavior: "smooth",
        })
    }
}

/* 
utility function scrollToSection in TypeScript to handle smooth scrolling to specific sections of a webpage. Each section is identified by a unique ID,
 and the function scrolls the viewport to the desired section with an offset to adjust the final scroll position.
*/