<script>
    export let isOpen = false;
  
    function closeModal() {
      isOpen = false;
    }
  </script>
  
  {#if isOpen}
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-content">
          <!-- Modal content goes here -->
          <slot></slot>
        </div>
        <button class="modal-close" on:click={closeModal}>X</button>
      </div>
    </div>
  {/if}
  
  <style>
    /* Add your modal styles here */
    .modal-overlay {
      /* Overlay styles */
    }
  
    .modal {
      /* Modal container styles */
    }
  
    .modal-content {
        margin-top: 20px;
    }
  
    .modal-close {
        margin: 0 auto;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        background-color: red;
        border-radius: 50%;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;        
    }
  </style>

