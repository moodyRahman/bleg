<script>
    export const prerender = true;
</script>

<div class="container">

    <nav>
        <a href="/">
            <span class="highlight">
                    my head hurts
            </span>
        </a>
        <span class="small">
            <div>
                a quirky blog about boxing, programming, and destiny 2
            </div>
            <div>
                they all have one thing in common
            </div>
        </span>
    </nav>

    <div>

        <slot>
            
        </slot>
        
    </div>

    <div>  
        footer
    </div>
    
</div>




<style>


    .container{
        margin-left: 10%;
        margin-right: 10%;        
    }
    nav {
        display: flex;
        flex-direction: row;
        margin-bottom: 5%;
        margin-top: 5%;
    }

    nav > span {
        margin-right: 30px;
    }

    nav > .small {
        font-size: 1rem;
        align-self:flex-end;
        margin-left: 50px;
    }

    nav > ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }

    a {
        text-decoration: none;
    }

    :global(body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>