
<div class="container">

    <nav>
        <a href="/">
            <span class="highlight">
                    moody's head hurts
            </span>
        </a>
        <span class="small">
            <div>
                a stream-of-conscious blog about boxing, programming, and destiny 2
            </div>
            <div>
                they all have one thing in common
            </div>
        </span>
    </nav>

    <div class="slot">

        <slot>
            
        </slot>
        
    </div>
<!-- 
    <div>  
        footer
    </div>
     -->
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

    .slot {
        margin-left: 5%;
        margin-right: 5%;
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


    @media (max-width: 800px) {
        
        .container{
            margin-left: 10px;
            margin-right: 10px;
        }

        .slot {
            margin-left: 0px;
            margin-right: 0px;
        }
        nav {
            display: flex;
            flex-direction: column;
            margin-bottom: 5%;
            margin-top: 5%;
            margin-left: 10px;
            margin-right: 10px;

        }


        nav > .small {
            font-size: 1rem;
            align-self:flex-end;
            margin-left: 0px;

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
    }
</style>