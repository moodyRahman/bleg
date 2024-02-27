
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

    <div class="footer">
        <div>
            <a href="https://moodyrahman.com">
                a moody rahman project
            </a>
        </div>
        <div> 
            no copyrights
        </div>
    </div>
</div>




<style>

    .container{
        margin-left: 10%;
        margin-right: 10%;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
    nav {
        display: flex;
        flex-direction: row;
        margin-bottom: 5%;
        margin-top: 5%;
    }

    .footer {
        text-align: center;
        padding: 10px;
        margin-top: 10%;
    }

    .slot {
        flex: 1;
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