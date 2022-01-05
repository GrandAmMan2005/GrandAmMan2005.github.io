<!DOCTYPE html>
<html lang="eng">
<head>
    <title>PHP Exam</title>
    <link rel="stylesheet" href="new_style.css">
</head>
<div class="container">
    <nav>
        <input type="checkbox" id="show-search">
        <input type="checkbox" id="show-menu">
        <label for="show-menu" class="menu-icon"><em class="fas fa-bars"></em></label>
        <div class="content">
            <div class="logo"><a href="#">3GIntegra.com</a></div>
            <ul class="links">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/intro.html">Integra Improvements</a></li>
                <li>
                    <a href="#" class="desktop-link">CSCI450 Assignments</a>
                    <input type="checkbox" id="show-features">
                    <label for="show-features">CSCI450 Assignments</label>
                    <ul>
                        <li><a href="/chapter4/chapter04.html">Chapter 4</a></li>
                        <li><a href="/chapter7/sort.html">Chapter 7</a></li>
                        <li><a href="/chapter8/cards.html">Chapter 8</a></li>
                        <li><a href="/dynamic/dynamic.html">Dynamic Cards</a></li>
                        <li><a href="/keypress/keypress.html">Key Press Assignment</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="desktop-link">Projects</a>
                    <input type="checkbox" id="show-services">
                    <label for="show-services">Projects</label>
                    <ul>
                        <li><a href="/project/audiodemo.html">Audio Player</a></li>
                        <li><a href="/Prime/prime.html">Test for Prime</a></li>
                        <li><a href="/88998811/exam.php">PHP Exam</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="desktop-link">Feedback</a>
                    <input type="checkbox" id="show-services">
                    <label for="show-services">Feedback</label>
                    <ul>
                        <li><a href="mailto:Grand.Am.Man2005@gmail.com">Contact Me</a></li>
                        <li>
                            <a href="#" class="desktop-link">More Items</a>
                            <input type="checkbox" id="show-items">
                            <label for="show-items">More Items</label>
                            <ul>
                                <li><a href="#">Sub Menu 1</a></li>
                                <li><a href="#">Sub Menu 2</a></li>
                                <li><a href="#">Sub Menu 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</div>
<div class="text">
    <h2>PHP Exam</h2>
    <button type="submit" class="rotten" id="one_word"><strong>1</strong></button>
    <button type="submit" class="rotten" id="two_word"><strong>2</strong></button>
    <button type="submit" class="rotten" id="four_word"><strong>4</strong></button>
    <button type="submit" class="rotten" id="six_word"><strong>6</strong></button>
    <br>
    <a href="3gintegra.com/index.html">Click here to go to home page</a>
    <br>
    <?php
    function CountVowels($String) {
        return substr_count($String, 'a')+substr_count($String, 'e')+
            substr_count($String, 'i')+substr_count($String, 'o')+
            substr_count($String, 'u');
    }
    // Driver
    // Initialize arrays
    $one_vowel = array("Letters with one Vowel: ");
    $two_vowel = array("Letters with two Vowels: ");
    $four_vowel = array("Letters with four Vowels: ");
    $six_vowel = array("Letters with six Vowels: ");
    // Open the file
    $file_in=file('words.txt');
    // To check the number of lines
    //echo count($file_in).'<br>';
    foreach($file_in as $line)
    {
        //echo $line.'<br>';
        //echo $line . CountVowels($line) .'<br>';
        if(CountVowels($line) == 1){
            //echo $line;
            array_push($one_vowel, $line);
        }
        elseif(CountVowels($line) == 2){
            //echo $line;
            array_push($two_vowel, $line);
        }elseif(CountVowels($line) == 4){
            //echo $line;
            array_push($four_vowel, $line);
        }elseif(CountVowels($line) == 6){
            //echo $line;
            array_push($six_vowel, $line);
        }
    }

    // Sort Arrays
    sort($one_vowel);
    sort($two_vowel);
    sort($four_vowel);
    sort($six_vowel);

    // Print Arrays
    foreach($one_vowel as $value){
        echo $value;
    }
    echo "<br>";echo "<br>";echo "<br>";
    foreach($two_vowel as $value){
        echo $value;
    }
    echo "<br>";echo "<br>";echo "<br>";
    foreach($four_vowel as $value){
        echo $value;
    }
    echo "<br>";echo "<br>";echo "<br>";
    foreach($six_vowel as $value) {
        echo $value;
    }
    ?>

</div>

</html>