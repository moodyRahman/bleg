<div>

    <nav>
        <a href="/">
            <span class="highlight">
                    my head hurts
            </span>
        </a>
        <span class="small">
            a quirky blog about boxing, programming, and destiny 2
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
    nav {
        display: flex;
        flex-direction: row;
    }

    nav > span {
        margin-right: 30px;
    }

    nav > .small {
        font-size: 1rem;
        align-self:flex-end;
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
</style>