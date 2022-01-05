<DOCTYPE! html>
    <html>
        <body>
            <div>
                <p>This shit don't work</p>
            </div>
            <div>
                <?php
                class MyDB extends SQLite3{
                    function __construct(){
                        $this->open('demo.db');
                    }
                }

                $db = new MyDB();
                $result = $db->query('SELECT username FROM users');
                while ($row = $result->fetchArray()){
                    var_dump($row);
                }
                ?>
            </div>
        </body>
    </html>
