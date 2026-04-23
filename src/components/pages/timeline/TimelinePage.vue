<script setup lang="ts">
import { GameFindingTimeline_Level as Lvl } from '@/components/pages/timeline/game-update/GameUpdateSetUtils';
import { useSettingsStore } from '@/settings/settings';
import { storeToRefs } from 'pinia';
import GameUpdateSet from '@/components/pages/timeline/game-update/GameUpdateSet.vue';
import GameUpdate from '@/components/pages/timeline/game-update/GameUpdate.vue';
import { px } from '@/utils/misc-utils';

const settings = useSettingsStore();
const {
    displayForExport: forExport,
    timelineLevel: level
} = storeToRefs(settings)

</script>

<template>

    <div class="timeline-page-root"
        :style="{
            'width': px(settings.timelineWidth),
        }">

        <main>

            <h1>
                <main>Team Fortress 2 - Timeline of
                    <template v-if="level === Lvl.Major">
                        major updates
                    </template>
                    <template v-else-if="level === Lvl.Minor">
                        <span class="fg-tf-orange">major</span> & minor updates
                    </template>
                    <template v-else-if="level === Lvl.Patch">
                        <span class="fg-tf-orange">major</span> & minor updates and <span class="fg-sec">patches</span>
                    </template>
                    related to game/match finding, structure and balance
                </main>
                <div v-if="level < Lvl.Patch" class="sec">
                    <template v-if="level === Lvl.Major">
                        Minor updates and small patches
                    </template>
                    <template v-else>
                        Small patches
                    </template>
                    omitted for brevity
                </div>
            </h1>

            <GameUpdateSet>

                <GameUpdate date="2007-10-10" :level="Lvl.Major">
                    <div class="title"><b>Game launch: Server browser with community servers only</b></div>
                    <div>No Quickplay, no Valve servers, no matchmaking.</div>
                </GameUpdate>

                <GameUpdate date="2007-10-25" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/1270/" wiki-link="https://wiki.teamfortress.com/wiki/October_25,_2007_Patch">
                    Improved autobalance calculation code when determining who to switch.
                </GameUpdate>

                <GameUpdate date="2008-02-28" :level="Lvl.Patch" news-link="" wiki-link="https://wiki.teamfortress.com/wiki/February_28,_2008_Patch">
                    Changed team autobalance code to not balance the teams when the active round timer shows less than 60 seconds (undocumented)
                </GameUpdate>

                <GameUpdate date="2010-09-30" :level="Lvl.Major" news-link="http://store.steampowered.com/news/4411/" wiki-link="https://wiki.teamfortress.com/wiki/September_30,_2010_Patch">
                    <b>Mann-conomy Update: Added new auto-team-scramble system</b>
                </GameUpdate>

                <GameUpdate date="2011-04-14" :level="Lvl.Major" news-link="https://store.steampowered.com/news/5305/" wiki-link="https://wiki.teamfortress.com/wiki/April_14,_2011_Patch">
                    <b>Hatless Update: Added a new vote system:</b>
                    <div>
                        Change map,
                        Set next map,
                        Extend current map,
                        Scramble teams,
                        Restart game,
                        Kick player
                    </div>
                </GameUpdate>

                <GameUpdate date="2011-06-23" :level="Lvl.Major"
                    news-link="https://store.steampowered.com/news/5724"
                    blog-link="https://www.teamfortress.com/post.php?id=5724"
                    wiki-link="https://wiki.teamfortress.com/wiki/June_23,_2011_Patch">
                    <b>Über Update (F2P Update): Added Valve servers and "Start Playing" button (First version of Quickplay)</b>
                    <div>No "Show servers" option</div>
                </GameUpdate>

                <GameUpdate date="2011-06-27" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/5746" wiki-link="https://wiki.teamfortress.com/wiki/June_27,_2011_Patch">
                    <div>Added a server console message when a player is sent to a server via the Quickplay matchmaking system.</div>
                </GameUpdate>
                <GameUpdate date="2011-07-07" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/5805" wiki-link="https://wiki.teamfortress.com/wiki/July_7,_2011_Patch">
                    Quickplay: Fixed a case where players were being matched to full servers
                </GameUpdate>
                <GameUpdate date="2011-07-08" :level="Lvl.Patch" blog-link="" wiki-link="https://wiki.teamfortress.com/wiki/July_8,_2011_Patch">
                    Patched Quickplay sending players to the wrong game mode (undocumented).
                </GameUpdate>
                <GameUpdate date="2011-07-18" :level="Lvl.Minor" news-link="https://store.steampowered.com/news/6282" wiki-link="https://wiki.teamfortress.com/wiki/July_18,_2011_Patch">
                    <div>Updated Quickplay matchmaking:</div>
                    <ul>
                        <li>Added progress bar and server count during search</li>
                        <li>Added more filtering on the master server to avoid pinging non-matching servers</li>
                        <li>Patched UI issues with menu darkening and letterboxing</li>
                    </ul>
                </GameUpdate>
                <GameUpdate date="2011-09-15" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/6282" wiki-link="https://wiki.teamfortress.com/wiki/September_15,_2011_Patch">
                    Updated matchmaking filtering to speed up searches and reduce the number of pinged servers.
                </GameUpdate>
                <GameUpdate date="2011-11-16" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/6793/" wiki-link="https://wiki.teamfortress.com/wiki/November_16,_2011_Patch">
                    Patched a bug preventing some server-side Quickplay filtering from working, which had caused clients to ping too many servers.
                </GameUpdate>
                <GameUpdate date="2012-05-17" :level="Lvl.Patch" blog-link="https://www.teamfortress.com/post.php?id=7999" wiki-link="https://wiki.teamfortress.com/wiki/May_17,_2012_Patch">
                    Added <code>koth_badlands</code> to eligible Quickplay maps.
                </GameUpdate>

                <GameUpdate date="2012-07-20" :level="Lvl.Major" blog-link="" wiki-link="https://wiki.teamfortress.com/wiki/July_20,_2012_Patch">
                    <b>Started beta of new Quickplay lobby system (accessible via console command).</b> <span class="sec">(undocumented)</span>
                </GameUpdate>

                <GameUpdate date="2012-07-23" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/8456" wiki-link="https://wiki.teamfortress.com/wiki/July_23,_2012_Patch">
                    Patched Replay / SourceTV clients getting kicked when Quickplay servers hibernate.
                </GameUpdate>
                <GameUpdate date="2012-08-02" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/8549" wiki-link="https://wiki.teamfortress.com/wiki/August_2,_2012_Patch">
                    Quickplay beta:
                    <ul>
                        <li>Patched bug causing game servers to sometimes stop receiving traffic upon victory</li>
                        <li>Added more status information while in the matchmaking queue</li>
                    </ul>
                </GameUpdate>
                <GameUpdate date="2012-08-17" :level="Lvl.Minor" news-link="https://store.steampowered.com/news/8674/" wiki-link="https://wiki.teamfortress.com/wiki/August_17,_2012_Patch">
                    Updated the Quickplay matchmaking ConVar <code>tf_mm_strict</code>:
                    A value of <code>2</code> will hide the server from the server browser but will still allow direct connections.
                </GameUpdate>
                <GameUpdate date="2012-08-21" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/8696/" wiki-link="https://wiki.teamfortress.com/wiki/August_21,_2012_Patch">
                    Patched Quickplay matchmaking sending players to out-of-date servers.
                </GameUpdate>
                <GameUpdate date="2012-09-21" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/8924" wiki-link="https://wiki.teamfortress.com/wiki/September_21,_2012_Patch">
                    Patched bug causing game servers to report themselves as full to the matchmaking system.
                </GameUpdate>
                <GameUpdate date="2013-02-01" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/9876/" wiki-link="https://wiki.teamfortress.com/wiki/February_1,_2013_Patch">
                    Patched Gullywash being in the wrong Quickplay matchmaking category.
                </GameUpdate>
                <GameUpdate date="2013-03-12" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/10122/" wiki-link="https://wiki.teamfortress.com/wiki/March_12,_2013_Patch">
                    Patched Gullywash being in the wrong Quickplay mapcycle.
                </GameUpdate>

                <GameUpdate date="2013-04-03" :level="Lvl.Minor" news-link="https://store.steampowered.com/news/10330/" wiki-link="https://wiki.teamfortress.com/wiki/April_3,_2013_Patch">
                    Prevented game servers from opening the MOTD panel more than once for players connecting through Quickplay.
                </GameUpdate>
                <GameUpdate date="2013-10-29" :level="Lvl.Minor" news-link="https://store.steampowered.com/news/11746" wiki-link="https://wiki.teamfortress.com/wiki/October_29,_2013_Patch">
                    <ul>
                        <li>Enabled Halloween event maps in Quickplay</li>
                        <li>Removed some servers that forged player counts from Quickplay and the server browser</li>
                    </ul>
                </GameUpdate>

                <GameUpdate date="2013-11-06" :level="Lvl.Major" news-link="https://store.steampowered.com/news/11807/" wiki-link="https://wiki.teamfortress.com/wiki/November_6,_2013_Patch">
                    <ul>
                        <li>
                            <b>HTML MOTDs no longer shown when connecting via Quickplay</b> <span class="sec">(due to abuse)</span>
                        </li>
                        <li>Removed prompt to opt-in to Quickplay beta</li>
                    </ul>
                </GameUpdate>

                <GameUpdate date="2014-01-23" :level="Lvl.Major" blog-link="https://www.teamfortress.com/post.php?id=12267" wiki-link="https://wiki.teamfortress.com/wiki/January_23,_2014_Patch">
                    <ul>
                        <li><b>Added Quickplay option to connect only to official Valve servers</b></li>
                        <li>Prevented game servers from redirecting Quickplay players to alternate servers</li>
                    </ul>
                </GameUpdate>

                <GameUpdate date="2014-02-07" :level="Lvl.Major" news-link="https://store.steampowered.com/news/12360/" wiki-link="https://wiki.teamfortress.com/wiki/February_7,_2014_Patch">
                    <ul>
                        <li><b>Added advanced Quickplay options: 32-player servers, nocrits, instant/modified respawn</b></li>
                        <li><b>Added "Show Servers" button to present a list of ~20 servers for manual selection</b></li>
                    </ul>
                </GameUpdate>
                <GameUpdate date="2014-02-07" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/12372/" wiki-link="https://wiki.teamfortress.com/wiki/February_7,_2014_Patch">
                    Fixed a client crash related to the Quickplay menu
                </GameUpdate>

                <GameUpdate date="2014-02-11" :level="Lvl.Major" news-link="https://store.steampowered.com/news/12392/" wiki-link="https://wiki.teamfortress.com/wiki/February_11,_2014_Patch">
                    <ul>
                        <li><b>Added option to search for <code>nodmgspread</code> servers in Quickplay</b></li>
                        <li>Removed disabling of non-vanilla option buttons when official servers selected</li>
                    </ul>
                </GameUpdate>
                <GameUpdate date="2014-07-08" :level="Lvl.Minor" news-link="https://store.steampowered.com/news/13819/" wiki-link="https://wiki.teamfortress.com/wiki/July_8,_2014_Patch">
                    Added beta maps (<code>RD_Asteroid</code>, <code>PL_CactusCanyon</code>) accessible via Quickplay "Play Beta Maps" option.
                </GameUpdate>

                <GameUpdate date="2014-07-17" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/13931/" wiki-link="https://wiki.teamfortress.com/wiki/July_17,_2014_Patch">
                    Patched Quickplay menu not remembering Advanced Options settings after using Play Beta Maps.
                </GameUpdate>

                <GameUpdate date="2014-08-07" :level="Lvl.Minor" news-link="http://store.steampowered.com/news/14098/" wiki-link="https://wiki.teamfortress.com/wiki/August_7,_2014_Patch">
                    Updated the Restart Game and Scramble Teams votes to always have a mandatory cool-down period
                </GameUpdate>
                <GameUpdate date="2014-09-25" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/14508/" wiki-link="https://wiki.teamfortress.com/wiki/September_25,_2014_Patch">
                    Updated auto-balance to immediately respawn players that are switched, or that voluntarily switch, during a balancing period.
                </GameUpdate>
                <GameUpdate date="2014-10-01" :level="Lvl.Minor" news-link="http://store.steampowered.com/news/14567/" wiki-link="https://wiki.teamfortress.com/wiki/October_1,_2014_Patch">
                    Added "Enable/Disable Auto TeamBalance" votes
                </GameUpdate>

                <GameUpdate date="2015-03-18" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/16129/" wiki-link="https://wiki.teamfortress.com/wiki/March_18,_2015_Patch">
                    Patched Thunder Mountain not showing up in the Quickplay dialog's map list.
                </GameUpdate>

                <GameUpdate date="2015-07-03" :level="Lvl.Major" news-link="https://store.steampowered.com/news/17416/" wiki-link="https://wiki.teamfortress.com/wiki/July_3,_2015_Patch">
                    <b>Valve servers no longer listed in the Server Browser.</b>
                </GameUpdate>

                <GameUpdate date="2015-07-04" :level="Lvl.Major" news-link="https://store.steampowered.com/news/17418/" wiki-link="https://wiki.teamfortress.com/wiki/July_4,_2015_Patch">
                    <b>Temporarily reverted the change hiding official Quickplay servers from the Server Browser.</b> <span class="sec">(This was never un-reverted)</span>
                </GameUpdate>

                <GameUpdate date="2015-10-29" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/19092/" wiki-link="https://wiki.teamfortress.com/wiki/October_29,_2015_Patch">
                    Patched missing Quickplay images for Mannpower maps Gorge and Thunder Mountain.
                </GameUpdate>
                <GameUpdate date="2015-11-03" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/19156/" wiki-link="https://wiki.teamfortress.com/wiki/November_3,_2015_Patch">
                    Patched Quickplay server list sometimes displaying map filename instead of proper name.
                </GameUpdate>

                <GameUpdate date="2015-11-13" :level="Lvl.Patch" blog-link="" wiki-link="https://wiki.teamfortress.com/wiki/November_13,_2015_Patch">
                    Added Invasion Community Update maps to regular Quickplay lists. <span class="sec">(undocumented)</span>
                </GameUpdate>
                <GameUpdate date="2015-11-25" :level="Lvl.Patch" blog-link="" wiki-link="https://wiki.teamfortress.com/wiki/November_25,_2015_Patch">
                    Mannpower is no longer the first option in Quickplay. <span class="sec">(undocumented)</span>
                </GameUpdate>

                <GameUpdate date="2016-04-25" :level="Lvl.Major" news-link="https://store.steampowered.com/news/21536/" wiki-link="https://wiki.teamfortress.com/wiki/April_25,_2016_Patch">
                    <ul>
                        <li><b>Added new Quickplay category for Alternative game modes</b></li>
                        <li>Moved Territorial Control, Special Delivery, and Player Destruction maps to it</li>
                    </ul>
                </GameUpdate>
                <GameUpdate date="2016-04-25" :level="Lvl.Major" news-link="https://store.steampowered.com/news/21542/" wiki-link="https://wiki.teamfortress.com/wiki/April_25,_2016_Patch">
                    <ul>
                        <li>Added Medieval maps to Alternative game modes</li>
                        <li>Added several maps (including Vanguard, Landfall, Highpass, Snowycoast) to respective rotations</li>
                    </ul>
                </GameUpdate>

                <GameUpdate date="2016-06-22" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/22596/" wiki-link="https://wiki.teamfortress.com/wiki/June_22,_2016_Patch">
                    Patched Mannpower and PASS Time showing up in the wrong Quickplay UI categories.
                </GameUpdate>

                <GameUpdate date="2016-07-07" :level="Lvl.Major" news-link="https://store.steampowered.com/news/22759/" wiki-link="https://wiki.teamfortress.com/wiki/July_7,_2016_Patch">
                    <div><b>Meet Your Match Update: Casual replaces Quickplay</b></div>
                    <ul>
                        <li>Queue for gamemodes, allowed up to 3 excludes</li>
                        <li>Increasing cooldown for abandoning matches</li>
                        <li>No rematches</li>
                        <li>No vote-kicks</li>
                        <li>No autobalance</li>
                        <li>Stopwatch mode on playload maps</li>
                    </ul>
                </GameUpdate>

                <GameUpdate date="2016-07-08" :level="Lvl.Major" news-link="https://store.steampowered.com/news/22800" wiki-link="https://wiki.teamfortress.com/wiki/July_8,_2016_Patch">
                    <ul>
                        <li><b>Removed abandonment penalties from Casual</b></li>
                        <li><b>Reduced mode selection requirement to a single mode before queuing</b></li>
                    </ul>
                </GameUpdate>
                <GameUpdate date="2016-07-14" :level="Lvl.Major" news-link="https://store.steampowered.com/news/22909" wiki-link="https://wiki.teamfortress.com/wiki/July_14,_2016_Patch">
                    <ul>
                        <li>Patched in-progress games not receiving new players</li>
                        <li><b>Added map-specific selection in game mode screen</b></li>
                        <li><b>Added vote-kick (kicked players retain partial XP)</b></li>
                        <li><b>Removed stopwatch mode from payload maps</b></li>
                        <li><b>Players can now specify desired maps in Casual matchmaking</b></li>
                    </ul>
                </GameUpdate>
                <GameUpdate date="2016-07-28" :level="Lvl.Major" news-link="https://store.steampowered.com/news/23197" wiki-link="https://wiki.teamfortress.com/wiki/July_28,_2016_Patch">
                    <ul>
                        <li><b>Matches can start with fewer than 24 players (adding more as available) to improve queue times in low-population areas</b></li>
                        <li>Added <code>cp_gullywash</code>, <code>cp_snakewater</code>, <code>koth_probed</code> to Casual</li>
                    </ul>
                </GameUpdate>

                <GameUpdate date="2016-08-03" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/24156/" wiki-link="https://wiki.teamfortress.com/wiki/August_3,_2016_Patch">
                    Fixed a case where players could be late-joined into games playing a map that they didn't have selected
                </GameUpdate>

                <GameUpdate date="2016-09-12" :level="Lvl.Minor" news-link="https://store.steampowered.com/news/24156/" wiki-link="https://wiki.teamfortress.com/wiki/September_12,_2016_Patch">
                    Increased preference for matching large parties against each other in Casual.
                </GameUpdate>

                <GameUpdate date="2016-09-27" :level="Lvl.Major" news-link="https://store.steampowered.com/news/24510" wiki-link="https://wiki.teamfortress.com/wiki/September_27,_2016_Patch">
                    <ul>
                        <li>
                            <b>Added rematch system at end of Casual matches</b>
                            <div class="sec">6 players per team must opt-in in 30 seconds, uses same teams, map & server</div>
                        </li>
                        <li>Automatic re-queue for non-rematch players</li>
                        <li>XP based on team performance, early leave no longer means getting no XP</li>
                        <li>Casual now more strongly prefers to distribute players to teams based on experience</li>
                        <li>Matches more likely to start with &lt; 24 players in lower population game-modes or regions (min. 12 players)</li>
                    </ul>
                </GameUpdate>
                <GameUpdate date="2016-12-21" :level="Lvl.Major" news-link="https://store.steampowered.com/news/26486/" wiki-link="https://wiki.teamfortress.com/wiki/December_21,_2016_Patch" sdk-link="https://github.com/ValveSoftware/source-sdk-2013/blob/3300848d8a25ef6403c91f82a4cd97d6daefbc06/src/game/server/tf/tf_autobalance.cpp#L200-L280">
                    <ul>
                        <li><b>Replaced rematch with automatically forming a new match with same players/teams after map vote (current map + 2 options based on player queue map selection)</b></li>
                        <li>Added max acceptable ping setting in lobby</li>
                        <li><b>Added voluntary autobalance system (with bonus XP incentive)</b></li>
                        <li>
                            <b>Autobalance system uses MMR instead of current game player scores</b> <span class="sec">(undocumented)</span>
                        </li>
                    </ul>
                </GameUpdate>
                <GameUpdate date="2017-10-20" :level="Lvl.Major" news-link="https://store.steampowered.com/news/33661" wiki-link="https://wiki.teamfortress.com/wiki/October_20,_2017_Patch">
                    <b>Jungle Inferno Update: Redesigned matchmaking screens as lightweight overlays</b>
                </GameUpdate>
                <GameUpdate date="2018-03-28" :level="Lvl.Major" news-link="https://store.steampowered.com/news/38643/" wiki-link="https://wiki.teamfortress.com/wiki/March_28,_2018_Patch">
                    <b>Blue Moon Update:</b>
                    <ul>
                        <li><b>Casual switches to Glicko skill-rating system for better balancing</b></li>
                        <li>Casual map list now sorted alphabetically</li>
                        <li>Added <code>ctf_sawmill</code>, <code>ctf_well</code>, <code>cp_5gorge</code>, <code>ctf_2fort_invasion</code>, <code>ctf_foundry</code> to Casual Mode</li>
                        <li><b>Updated map vote to only show maps for current game mode</b></li>
                        <li><b>Added "Queue while playing" feature</b></li>
                        <li>Added "Multi-Queue" feature (Queue for Casual, Competitive, MvM simultaneously)</li>
                        <li>Autobalance, if no players volunteer, forcibly switches candidates when they die or after a certain time</li>
                    </ul>
                </GameUpdate>
                <GameUpdate date="2018-05-17" :level="Lvl.Patch" news-link="https://store.steampowered.com/news/40205/" wiki-link="https://wiki.teamfortress.com/wiki/May_17,_2018_Patch">
                    Updated the Autobalance system to skip asking/waiting for volunteers.
                </GameUpdate>
                <GameUpdate date="2024-11-14" :level="Lvl.Minor" news-link="https://store.steampowered.com/news/app/440/view/6634459680135446655" wiki-link="https://wiki.teamfortress.com/wiki/November_14,_2024_Patch">
                    <ul>
                        <li>Improved matchmaking performance</li>
                        <li>Improved matchmaker behavior for high-ping users and cross-region parties</li>
                        <li>Added error messages when being ejected from the matchmaking queue due to connectivity or authentication failures, rather than the queue simply silently vanishing</li>
                        <li>Fixed the matchmaking settings dialog frequently failing to display any datacenters</li>
                        <li>Fixed multiple cases of in-progress casual matches abruptly terminating or failing to be assigned any new players if the game server ever loses connection to Steam</li>
                    </ul>
                </GameUpdate>

                <GameUpdate date="2025-07-24" :level="Lvl.Minor" news-link="https://store.steampowered.com/news/app/440/view/526475421347217633" wiki-link="https://wiki.teamfortress.com/wiki/July_24,_2025_Patch">
                    Reduced default value for ConVar <code>tf_mm_next_map_vote_time</code> from 30s to 15s (shortened map vote timer)
                </GameUpdate>

            </GameUpdateSet>

        </main>

    </div>
</template>

<style scoped lang="scss">
@use "timeline-page.scss";
</style>