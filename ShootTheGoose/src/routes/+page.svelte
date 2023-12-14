<script>
    import { isVeganMod } from './store';

    let checked = false;
    isVeganMod.set(false);
    

    function isChecked(event) {
        if (checked === false){
            isVeganMod.set(true);
        }
        else{
            isVeganMod.set(false);

        }
        
    }
    
    
</script>

<header>  
    <div class="flex items-center justify-center">
        <h1 style="font-size: 90px; font-weight: bold;">
            Shoot The Goose
        </h1>
    </div>
</header>

<body>
        <div class="flex items-center justify-center">
            <a href="../game">
                <button
                    class="flex items-center justify-center font-medium text-center text uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-60 max-w-[900px] h-20 max-h-[70px] rounded-lg text-base bg-gray-900 text-white"
                    type="button">
                    Commencer la partie
                </button>
            </a>    
        </div>    
            
            <ul class="flex items-center justify-center h-32">
                <li>
                    <input type="checkbox" id="react-option" value="" class="hidden peer" bind:checked={checked} on:click={isChecked}>
                    <label for="react-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-900 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                        <div class="block">
                            <img class="mb-2 w-7 h-7 text-sky-500" src="/images/vegan.png" alt=""/>
                            <div class="w-full text-lg font-semibold">Vegan mod</div>
                        </div>
                    </label>
                </li>
            </ul>
</body>

    
