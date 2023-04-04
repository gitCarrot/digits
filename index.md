<p>Digits is an application that allows users to:</p>

<ul>
  <li>Register an account.</li>
  <li>Create and manage a set of contacts.</li>
  <li>Add a set of timestamped notes regarding their interactions with each contact.</li>
</ul>

<h3 id="installation">Installation</h3>

<p>First, <a href="https://www.meteor.com/install">install Meteor</a>.</p>

<p>Second, <a href="https://github.com/philipmjohnson/digits">download a copy of Digits</a>. Note that Digits is a private repo and so you will need to request permission from the author to gain access to the repo.</p>

<p>Third, cd into the app directory install the required libraries with:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>$ meteor npm install
</code></pre></div></div>

<p>Once the libraries are installed, you can run the application by invoking:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>$ meteor npm run start
</code></pre></div></div>

<p>The first time you run the app, it will create some default users and data. Here is the output:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>meteor npm run start

&gt; meteor-application-template-react@ start /Users/philipjohnson/github/philipmjohnson/digits/app
&gt; meteor --no-release-check --settings ../config/settings.development.json

[[[[[ ~/github/philipmjohnson/digits/app ]]]]]

=&gt; Started proxy.                             
=&gt; Started MongoDB.                           
I20180305-18:06:02.764(-10)? Creating the default user(s)
I20180305-18:06:02.803(-10)?   Creating user admin@foo.com.
I20180305-18:06:02.803(-10)?   Creating user john@foo.com.
I20180305-18:06:02.804(-10)? Creating default contacts.
I20180305-18:06:02.804(-10)?   Adding: Johnson (john@foo.com)
I20180305-18:06:02.804(-10)?   Adding: Casanova (john@foo.com)
I20180305-18:06:02.804(-10)?   Adding: Binsted (admin@foo.com)
=&gt; Started your app.

=&gt; App running at: http://localhost:3000/
W20180305-18:06:02.805(-10)? (STDERR) Note: you are using a pure-JavaScript implementation of bcrypt.
W20180305-18:06:02.805(-10)? (STDERR) While this implementation will work correctly, it is known to be
W20180305-18:06:02.806(-10)? (STDERR) approximately three times slower than the native implementation.
W20180305-18:06:02.806(-10)? (STDERR) In order to use the native implementation instead, run
W20180305-18:06:02.806(-10)? (STDERR)
W20180305-18:06:02.806(-10)? (STDERR)   meteor npm install --save bcrypt
W20180305-18:06:02.806(-10)? (STDERR)
W20180305-18:06:02.806(-10)? (STDERR) in the root directory of your application.

</code></pre></div></div>

<p><strong>Note regarding bcrypt warning.</strong> You will also get the following message when you run this application:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>Note: you are using a pure-JavaScript implementation of bcrypt.
While this implementation will work correctly, it is known to be
approximately three times slower than the native implementation.
In order to use the native implementation instead, run

meteor npm install --save bcrypt

in the root directory of your application.
</code></pre></div></div>

<p>On some operating systems (particularly Windows), installing bcrypt is much more difficult than implied by the above message. Bcrypt is only used in Meteor for password checking, so the performance implications are negligible until your site has very high traffic. You can safely ignore this warning without any problems during initial stages of development.</p>

<p>If all goes well, the template application will appear at <a href="http://localhost:3000">http://localhost:3000</a>.  You can login using the credentials in <a href="https://github.com/ics-software-engineering/meteor-application-template-react/blob/master/config/settings.development.json">settings.development.json</a>, or else register a new account.</p>

<p>Lastly, you can run ESLint over the code in the imports/ directory with:</p>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>meteor npm run lint
</code></pre></div></div>

<h2 id="user-interface-walkthrough">User Interface Walkthrough</h2>

<h4 id="landing-page">Landing Page</h4>

<p>When you first bring up the application, you will see the landing page that provides a brief introduction to the capabilities of Digits:</p>

<img src="doc/user-sign-in.png">

<h4 id="register">Register</h4>

<p>If you do not yet have an account on the system, you can register by clicking on “Login”, then “Sign Up”:</p>

<img src="doc/signup.png">

<h4 id="sign-in">Sign in</h4>

<p>Click on the Login link, then click on the Signin link to bring up the Sign In page which allows you to login:</p>

<img src="doc/sign-in.png">

<h4 id="list-contacts">List Contacts</h4>

<p>Clicking on the List Contacts link brings up a page that lists all of the contacts associated with the logged in user:</p>

<img src="doc/add-contact.png">
<img src="doc/add-contact2.png">
<img src="doc/list-contact.png">

<h4 id="edit-contacts">Edit Contacts</h4>

<p>From the List Contacts page, the user can click the “Edit” link associated with any Contact to bring up a page that allows that Contact information to be edited:</p>


<img src="doc/edit-contact.png">
<img src="doc/edit-contact2.png">
<img src="doc/edit-contact3.png">

<p>This page also allows the user to add timestamped “notes” detailing interactions they’ve had with the Contact.  For example:</p>

<img src="doc/note.png">
<img src="doc/note2.png">

<h4 id="admin-mode">Admin mode</h4>

<p>It is possible to designate one or more users as “Admins” through the settings file.  When a user has the Admin role, they get access to a special NavBar link that retrieves a page listing all Contacts associated with all users:</p>

<img src="doc/admin-page.png" />