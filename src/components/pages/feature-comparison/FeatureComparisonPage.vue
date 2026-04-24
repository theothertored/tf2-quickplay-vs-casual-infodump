<script setup lang="ts">
import No from '@/components/pages/feature-comparison/markers/No.vue';
import Yes from '@/components/pages/feature-comparison/markers/Yes.vue';
import { useSettingsStore } from '@/settings/settings';
import { storeToRefs } from 'pinia';

const settings = useSettingsStore();

const {
    featureComparisonLayersComtress: comtress,
    featureComparisonLayersSbmm: sbmm,
    featureComparisonLayersSbmmNotes: sbmmNotes,
    featureComparisonLayersQuickplayImprovements: qpImprovements,
    displayForExport: forExport,
} = storeToRefs(settings)

</script>

<template>

    <div class="feature-comparison-table-root">

        <h1>
            <main>
                Team Fortress 2 -
                <template v-if="comtress">Quickplay, Casual and Team Comtress Casual 2</template>
                <template v-else>Quickplay and Casual</template> feature comparison
            </main>
            <div v-if="sbmmNotes" class="sec sbmm-hl">With notes about Skill-Based Matchmaking (SBMM)</div>
        </h1>

        <table :class="{
            'layer-sbmm': sbmm,
            'layer-sbmm-notes': sbmmNotes,
            'layer-comtress': comtress,
            'for-export': forExport,
        }">

            <colgroup class="header">
                <col />
                <col />
            </colgroup>
            <colgroup class="systems">
                <col />
                <col />
            </colgroup>
            <colgroup v-if="qpImprovements" class="qp-improvements">
                <col />
            </colgroup>
            <colgroup v-if="sbmm" class="sbmm">
                <col />
                <col />
            </colgroup>
            <colgroup v-if="comtress" class="comtress">
                <col />
            </colgroup>

            <thead>
                <tr>
                    <th>Category</th>
                    <th>Aspect</th>
                    <th>
                        <div class="title">Quickplay</div>
                        <div class="sec">Final iteration (2016-04-25)</div>
                    </th>
                    <th>
                        <div class="title">Casual</div>
                        <div class="sec">Latest iteration (2025-07-24)</div>
                    </th>
                    <th v-if="qpImprovements" class="qp-improvements">Quickplay upgrades</th>
                    <th v-if="sbmm" class="sbmm">Casual upgrades</th>
                    <th v-if="sbmm" class="sbmm">If MMR isn't crucial</th>
                    <th v-if="comtress" class="comtress">
                        <div class="title">Team Comtress Casual 2</div>
                        <div class="sec"></div>
                    </th>
                </tr>
            </thead>

            <tbody>

                <tr class="category-start">
                    <td rowspan="2">
                        Servers
                    </td>
                    <td>Ecosystem</td>
                    <td>
                        Valve and Community Servers in one ecosystem: Quickplay Game Finder (individual-level, "Play now"/"Show servers") AND Server Browser
                    </td>
                    <td>Two ecosystems: Valve Servers through the Casual Game Coordinator OR Community Servers through Server Browser</td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" class="sbmm" rowspan="2">
                        <div class="diff-severe">Controlled play environment</div>
                        <div class="sbmm-note sec sbmm-hl">
                            [1] For the SBMM score to be meaningful, the environment must be consistent
                            &rarr; player can't pick servers, SBMM can't meaningfully work with alternative server settings or community servers
                        </div>
                    </td>
                    <td v-if="sbmm" class="sbmm" rowspan="2">
                        <div class="diff-minor">Environment doesn't need to be as controlled</div>
                    </td>
                    <td v-if="comtress" class="comtress"></td>
                </tr>
                <tr>
                    <td>Valve servers in Browser</td>
                    <td>
                        <Yes />
                        <span class="sec">(for specific gamemodes, ex. "Valve Payload Server")</span>
                    </td>
                    <td>
                        <No />
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <!-- sbmm rowspan -->
                    <!-- sbmm rowspan -->
                    <td v-if="comtress" class="comtress"></td>
                </tr>

                <tr class="category-start">
                    <td rowspan="6">Match-making</td>
                    <td>Adjustable ping limit</td>
                    <td>
                        <No />
                        <span class="sec">(can't control how Quickplay algorithm takes ping into account, can sort & filter by ping in Server Browser)</span>
                    </td>
                    <td>
                        <Yes />
                        <div class="sbmm-note sec sbmm-hl">[2] Must be built in because you can't pick your servers</div>
                    </td>
                    <td v-if="qpImprovements" rowspan="3" class="qp-improvements">
                        <div class="diff-minor">Could be added to Quickplay</div>
                    </td>
                    <td v-if="sbmm" class="sbmm"></td>
                    <td v-if="sbmm" class="sbmm"></td>
                    <td v-if="comtress" class="comtress"></td>
                </tr>
                <tr>
                    <td>Search for multiple gamemodes</td>
                    <td>
                        <No />
                    </td>
                    <td>
                        <Yes />
                        <div class="sbmm-note sec sbmm-hl">&Uparrow; See [2] above</div>
                    </td>
                    <!-- qpimprovements rowspan -->
                    <td v-if="sbmm" class="sbmm"></td>
                    <td v-if="sbmm" class="sbmm"></td>
                    <td v-if="comtress" class="comtress"></td>
                </tr>
                <tr>
                    <td>Search for specific map</td>
                    <td>
                        <No />
                        <span class="sec">(can select using "show servers" or Server Browser)</span>
                    </td>
                    <td>
                        <Yes />
                        <div class="sbmm-note sec sbmm-hl">&Uparrow; See [2] above</div>
                    </td>
                    <!-- qpimprovements rowspan -->
                    <!-- sbmm rowspan -->
                    <!-- sbmm rowspan -->
                    <td v-if="comtress" class="comtress"></td>
                </tr>
                <tr>
                    <td>"Show servers" option</td>
                    <td>
                        <Yes />
                    </td>
                    <td>
                        <No />
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" rowspan="3" class="sbmm">
                        <div class="diff-severe">Controlled environment</div>
                        <div class="sbmm-note sec sbmm-hl">&Uparrow; See [1] above</div>
                    </td>
                    <td v-if="sbmm" rowspan="3" class="sbmm">
                        <div class="diff-minor">Environment doesn't need to be as controlled</div>
                    </td>
                    <td v-if="comtress" class="comtress"></td>
                </tr>
                <tr>
                    <td>Search for Community Servers</td>
                    <td>
                        <Yes />
                        <span class="sec">(opt-in via "Community Servers" checkbox)</span>
                    </td>
                    <td>
                        <No />
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <!-- sbmm rowspan -->
                    <!-- sbmm rowspan -->
                    <td v-if="comtress" class="comtress"></td>
                </tr>
                <tr>
                    <td>Search for non-vanilla servers</td>
                    <td>
                        <Yes />
                        <span class="sec">(no random crits, no damage spread, modified respawn times, max player count)</span>
                    </td>
                    <td>
                        <No />
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <!-- sbmm rowspan -->
                    <!-- sbmm rowspan -->
                    <td v-if="comtress" class="comtress"></td>
                </tr>

                <tr class="category-start">
                    <td rowspan="2">Connection</td>
                    <td>
                        Direct connections
                    </td>
                    <td>
                        <Yes />
                        <span class="sec">(via <code>connect</code> in console or steam://connect link)</span>
                    </td>
                    <td>
                        <No />
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" class="sbmm">
                        <div class="diff-severe">Controlled environment</div>
                        <div class="sbmm-note sec sbmm-hl">&Uparrow; See [1] above</div>
                    </td>
                    <td v-if="sbmm" class="sbmm">
                        <div class="diff-minor">Environment doesn't need to be as controlled</div>
                    </td>
                    <td v-if="comtress" class="comtress"></td>
                </tr>
                <tr>
                    <td>
                        Slot reservation
                        <span class="sec">(ex. reconnect after game crash)</span>
                    </td>
                    <td>
                        <No />
                    </td>
                    <td>
                        <Yes />
                        <span class="sec">(long timer, some ways to quit don't free the slot)</span>
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" class="sbmm">
                        <div class="diff-severe">Preserving team placements</div>
                        <div class="sbmm-note sec sbmm-hl">&Uparrow; See [1] above</div>
                    </td>
                    <td v-if="sbmm" class="sbmm diff-minor">No need to preserve team placements</td>
                    <td v-if="comtress" class="comtress"></td>
                </tr>

                <tr class="category-start">
                    <td rowspan="3">Friends</td>
                    <td>Joining friends</td>
                    <td>
                        Server Browser Friends tab or Steam <span class="sec">(instant join)</span>
                    </td>
                    <td>
                        Party system <span class="sec">(queue for friend's game)</span>
                        <div class="sbmm-note sec sbmm-hl">
                            [3] Party system must be built-in, otherwise there is no way to play with friends.
                            SBMM must also account for stacks being better than random p
                        </div>
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" class="sbmm">
                        <div class="diff-severe">Preserving team placements & controlled environment</div>
                        <div class="sbmm-note sec sbmm-hl">&Uparrow; See [1] above</div>
                    </td>
                    <td v-if="sbmm" class="sbmm diff-minor">Can freely join and leave</td>
                    <td v-if="comtress" class="comtress"></td>
                </tr>
                <tr>
                    <td>Finding games/matches with friends</td>
                    <td>Manual, slots may get taken before all friends can join</td>
                    <td>
                        Party system
                        <div class="sbmm-note sec sbmm-hl">&Uparrow; See [3] above</div>
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements">
                        <div class="diff-minor">There was a beta for adding lobbies to Quickplay</div>
                    </td>
                    <td v-if="sbmm" class="sbmm"></td>
                    <td v-if="sbmm" class="sbmm"></td>
                    <td v-if="comtress" class="comtress"></td>
                </tr>
                <tr>
                    <td>Friends' team</td>
                    <td>
                        Whichever has a free slot on join
                        <span class="sec">(can switch later)</span>
                    </td>
                    <td>
                        All on one team <span class="sec">(unless autobalanced)</span>
                        <div class="sbmm-note sec sbmm-hl">&Uparrow; See [3] above</div>
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" class="sbmm diff-minor">Coming soon to Casual</td>
                    <td v-if="sbmm" class="sbmm"></td>
                    <td v-if="comtress" class="comtress"></td>
                </tr>

                <tr class="category-start">
                    <td rowspan="4">Game/&ZeroWidthSpace;match structure</td>
                    <td>Game/match format</td>
                    <td>Game: rounds until 45 minute map timer expires</td>
                    <td>Match: Best of 3 rounds for most gamemodes, best of 2 rounds for PL/AD, 1 round for CTF</td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" class="sbmm">
                        <div class="diff-severe">Match outcomes being important</div>
                        <div class="sbmm-note sec sbmm-hl">
                            [4] Format needs to determine winner and loser to calculate SBMM ratings.
                            Shorter matches reduce variance from players leaving, autobalance and other team placement changes.
                        </div>
                    </td>
                    <td v-if="sbmm" class="sbmm diff-minor">Match outcomes matter less</td>
                    <td v-if="comtress" class="comtress">Match: series of Casual matches until 35 minute map timer expires, payload hybrid stopwatch mode that allows full rounds</td>
                </tr>
                <tr>
                    <td>Waiting for players timer</td>
                    <td>30 seconds at game start</td>
                    <td>150 seconds at match start, can decrease in jumps at some player number thresholds, ends instantly if all 24 players connect, sometimes resets back up</td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" class="sbmm">
                        <div class="diff-severe">Match outcomes being important & preserving team placements</div>
                        <div class="sbmm-note sec sbmm-hl">
                            [5] Must wait for players to keep the match fair: SBMM ratings matter &rarr; final outcome matters &rarr; round outcome matters
                        </div>
                    </td>
                    <td v-if="sbmm" class="sbmm diff-minor">
                        Individual round outcomes matter less
                    </td>
                    <td v-if="comtress" class="comtress">150 seconds at server start, down to 30s on 7v7, ends instantly on 9v9</td>
                </tr>
                <tr>
                    <td>Next map vote</td>
                    <td>During game</td>
                    <td>Between matches</td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" rowspan="2" class="sbmm diff-minor">Could be changed in Casual</td>
                    <td v-if="sbmm" class="sbmm diff-type"></td>
                    <td v-if="comtress" class="comtress">During match</td>
                </tr>
                <tr>
                    <td>Next map selection</td>
                    <td>Extend current (no server reload) or any map in gamemode</td>
                    <td>
                        Same map (with server reload) or 2 others in gamemode based on players' queue map selection.
                        Vote UI sometimes becomes unclickable (can vote via <code>next_map_vote 0/1/2</code>)
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <!-- sbmm rowspan -->
                    <td v-if="sbmm" class="sbmm diff-type"></td>
                    <td v-if="comtress" class="comtress">Same map (with server reload) or any map in gamemode</td>
                </tr>

                <tr class="category-start">
                    <td rowspan="4">Balance</td>
                    <td>Team scramble</td>
                    <td>
                        Between rounds
                        <span class="sec">(uses current game player score, voted for or automatic on team score difference of 2)</span>
                    </td>
                    <td>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ValveSoftware/source-sdk-2013/blob/3300848d8a25ef6403c91f82a4cd97d6daefbc06/src/game/server/tf/tf_gc_server.cpp#L147">Between matches</a> <span class="sec">(uses player MMR, minimal effect since MMR was used for forming the teams in the first place)</span>
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" class="sbmm">
                        <div class="diff-severe">Preserving team placements</div>
                        <div class="sbmm-note sec sbmm-hl">
                            [6] Team placements are not preserved &rightarrow; final score is less reflective of two teams being pitted against each other
                        </div>
                    </td>
                    <td v-if="sbmm" class="sbmm diff-minor">No need to preserve team placements</td>
                    <td v-if="comtress" class="comtress">
                        <Yes />
                        <span class="sec">(shuffle mid-tier players to minimize disruption)</span>
                    </td>
                </tr>
                <tr>
                    <td>Autobalance for uneven team sizes</td>
                    <td>
                        <Yes />
                        <span class="sec">(uses current game player score, can vote to disable)</span>
                    </td>
                    <td>
                        <Yes />
                        <span class="sec">(<a target="_blank" rel="noopener noreferrer" href="https://github.com/ValveSoftware/source-sdk-2013/blob/3300848d8a25ef6403c91f82a4cd97d6daefbc06/src/game/server/tf/tf_autobalance.cpp#L200-L280">uses player MMR</a>, doesn't switch slots reserved for unconnected players)</span>
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" class="sbmm">
                        <div class="diff-severe">Preserving team placements</div>
                        <div class="sbmm-note sec sbmm-hl">&Uparrow; See [6] above</div>
                    </td>
                    <td v-if="sbmm" class="sbmm diff-minor">No need to preserve team placements</td>
                    <td v-if="comtress" class="comtress">
                        <Yes />
                        <span class="sec">(with improvements, uses current match performance metrics)</span>
                    </td>
                </tr>
                <tr>
                    <td>Manual team switching & spectate</td>
                    <td>
                        <Yes />
                    </td>
                    <td>
                        <No />
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" class="sbmm">
                        <div class="diff-severe">Preserving team placements</div>
                        <div class="sbmm-note sec sbmm-hl">&Uparrow; See [6] above</div>
                    </td>
                    <td v-if="sbmm" class="sbmm diff-minor">No need to preserve initial teams</td>
                    <td v-if="comtress" class="comtress">
                        <Yes />
                    </td>
                </tr>
                <tr>
                    <td>Skill-based matchmaking</td>
                    <td>
                        <No />
                    </td>
                    <td>
                        <Yes />
                        <span class="sec">(<a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/news/38643/">uses Glicko</a>)</span>
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" class="sbmm diff-type"></td>
                    <td v-if="sbmm" class="sbmm diff-type"></td>
                    <td v-if="comtress" class="comtress">
                        <Yes />
                        <span class="sec">(Considers more than just MMR for forming matches and balancing)</span>
                    </td>
                </tr>

                <tr class="category-start">
                    <td>Other</td>
                    <td>XP collection and badge</td>
                    <td>
                        <No />
                    </td>
                    <td>
                        <Yes />
                    </td>
                    <td v-if="qpImprovements" class="qp-improvements"></td>
                    <td v-if="sbmm" class="sbmm diff-type"></td>
                    <td v-if="sbmm" class="sbmm diff-type"></td>
                    <td v-if="comtress" class="comtress"></td>
                </tr>

            </tbody>
        </table>

    </div>

</template>

<style scoped lang="scss">
@use "./feature-comparison-page.scss";
</style>