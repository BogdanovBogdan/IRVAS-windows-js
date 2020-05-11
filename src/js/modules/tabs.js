const tabs = (containerTabsSelector, tabSelector, tabsContentSelector, activeSelector, display = "block") => {
   const containerTabs = document.querySelector(containerTabsSelector),
         tabs = document.querySelectorAll(tabSelector),
         tabsContent = document.querySelectorAll(tabsContentSelector);
   
   function hideTabsContent() {
      tabsContent.forEach(item => {
         item.style.display = "none";
      });

      tabs.forEach(item => {
         item.classList.remove(activeSelector);
      });
   }

   function showTabContent(i = 0) {
      tabsContent[i].style.display = display;
      tabs[i].classList.add(activeSelector);
   }

   hideTabsContent();
   showTabContent();

   containerTabs.addEventListener("click", (e) => {
      const target = e.target;
      
      if (target.classList.contains(tabSelector.replace(/\./, "")) || 
      target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {         
         
         tabs.forEach((item, i) => {
            if(target == item || target.parentNode == item) {
               hideTabsContent();
               showTabContent(i);
            }
         })
      }
   });

};

export default tabs;