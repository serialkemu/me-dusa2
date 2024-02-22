import { Button } from 'bootstrap'
import React from 'react'

const Information = () => {
  return (
    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">

      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">What are the warning signs for child sexual abuse?</h5>
        <button className="card-text btn btn-secondary"><a>READ MORE</a></button>
      </div>
      <div class="card-footer"> -m
        <button className="card-text btn btn-secondary"><a>READ MORE</a></button>
      </div>
      <div class="cardkking-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Information