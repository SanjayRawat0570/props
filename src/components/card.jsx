import React from 'react'
function Card(props) {


  return (
    <>
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/5802144/pexels-photo-5802144.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load alt=" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p class="text-lg fon">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption>
        <div>
         {props.name || "Anurag"}
        </div>
        <div>
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
  </>

  )
}

export default Card